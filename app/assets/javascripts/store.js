var apiAdapter = DS.RESTAdapter.create({
    namespace: 'api/v1'
    , bulkCommit: false
  });


EmberBlog.key = "ApiKey";
EmberBlog.SessionToken = 'SessionToken';
EmberBlog.user_id = "user_id";
EmberBlog.otherParams = {};
EmberBlog.addParam = function(key, value){
  EmberBlog.otherParams[key] = value
}

EmberBlog.RESTConnector = DS.RESTAdapter.extend({
  namespace: 'api/v1',
  bulkCommit: false
});

update_hash = function(hash){
  if (Ember.isEmpty(hash)) hash = {};
  if (Ember.isEmpty(hash.data)) hash.data = {};
  hash.data.app_id = EmberBlog.key;
  hash.data.session_id = EmberBlog.user_id;
  hash.data.session_token = EmberBlog.SessionToken;
  
  var keys = Object.keys(EmberBlog.otherParams)
  if(keys.length > 0){ 
    for(var i = 0; i < keys.length; i++){
      key = keys[i]
      value = EmberBlog.otherParams[key]
      hash.data[key] = value
    }
  }
  
  return hash;
}

EmberBlog.RESTAdapter = EmberBlog.RESTConnector.extend({
  // Scope all ajax calls.
  ajax: function(url, type, hash) {
  	//url = url + ".json";
    hash = update_hash(hash);
    data = this._super(url, type, hash);
    return data;
  }, 
  rejectionHandler: function(reason){
    return ownRejectionHandler(reason, this);  //this -> adapter
  },
  /*
  handleError: function(store, records, jqXHR){
    console.log("handling error...")
    ownHandleError(store, records, jqXHR);
  },
  shouldSave: function(record){
    // check if valid update
    return this._super(record);
  },
  */
  find: function(store, type, id){
    return ownFind(store, type, id, this);
  },
  createRecord: function(store, type, record){
    return ownCreateRecord(store, type, record, this);
  }, 
  didError: function(store, type, record, xhr){
    if(xhr.status === 422){
      console.log("422")
      console.log(xhr);
      //handle handle422
    }else{
      console.log("else 422")
      this._super(store, type, record, xhr);
      throw xhr;
    }
  },
  didFindRecord: function(store, type, payload, id) {
    //console.log("didFindRecord: function(store, type, payload, id)");
    //console.log(store);
    //console.log(type);    

    //console.log(payload);
    //console.log(id);
    if (payload.status === 404) {
        console.log("404 - not found!!!!");
        return handle404(store, type, payload, id, this);        
    }else if(payload.status === 422){
      console.log("status 422");
      console.log(payload)        
    }else{
      console.log("ok: ");
      var ok = this._super(store, type, payload, id);  
      
      //console.log(ok);
      return ok;
    }    
  }

});


EmberBlog.Store = DS.Store.extend({
  revision: 11, 
  //adapter: 'DS.FixtureAdapter' /*
  //adapter: apiAdapter 
  adapter: "EmberBlog.RESTAdapter"
});

// initializing the app 



//EmberBlog.Store.adapter.serializer.map('EmberBlog.Post', {comments: {'embedded': 'load'}});


function ownHandleError(store, records, jqXHR) {
     var responseHash = this.parseResponseText(jqXHR);
      console.log(records);
      console.log(responseHash);
     if (jqXHR.status === 422) {
       records.forEach(function(record) {
         var errors = this.materializeValidationErrors(record, responseHash['errors']);
 
         store.recordWasInvalid(record, errors);
       });
     }else{
       this._super();
     }
  }

function handle404(store, type, payload, id, handler){
  console.log(handler)
  var root = handler.rootForType(type);
  var root_index = root + "s.index";
  console.log(root)
  console.log(root_index);  
  return EmberBlog.Router.router.transitionTo(root_index);
}
function ownFind(store, type, id, handler){
  /*
    //default Find
    var root = this.rootForType(type), adapter = this;

    return this.ajax(this.buildURL(root, id), "GET").
      then(function(json){
        adapter.didFindRecord(store, type, json, id);
    }).then(null, rejectionHandler);
  */
  //return handler._super(store, type, id);
  var root    = handler.rootForType(type), 
      adapter = handler;

  return handler.ajax(handler.buildURL(root, id), "GET").
      then(function(json){
        //console.log("received this from ajax call:")
        //console.log(json);
        adapter.didFindRecord(store, type, json, id);
    }).then(null, handler.rejectionHandler);
}

function ownCreateRecord(store, type, record, handler) {
    var root = handler.rootForType(type);
    var adapter = handler;
    var data = {};

    data[root] = handler.serialize(record, { includeId: true });

    return handler.ajax(handler.buildURL(root), "POST", {
      data: data
    }).then(function(json){
      //console.log("own create record .. fix")
      var root = handler.rootForType(type)
      //console.log(root);
      expectedJSON = json[root]
      if(expectedJSON == undefined){
        adapter.didCreateRecord(store, type, record, json);
      }else{
        console.log("in here...")
        var id = expectedJSON["id"]
        console.log(expectedJSON)
        console.log(id)
        record.set("id", id)
        adapter.didCreateRecord(store, type, record, expectedJSON);
      }
    }, function(xhr) {
      adapter.didError(store, type, record, xhr);
    }).then(null, adapter.rejectionHandler);
  }

function ownRejectionHandler(reason, handler){
  /*  Default behaviour
  Ember.Logger.error(reason, reason.message);
  throw reason;
  */
  //console.log("rejectionHandler...")
  //console.log(reason)
  if(reason.error){ 
    console.log(reason);
  }
}