var apiAdapter = DS.RESTAdapter.create({
    namespace: 'api/v1'
    , bulkCommit: false
  });


EmberBlog.key = "ApiKey";
EmberBlog.SessionToken = 'SessionToken';
EmberBlog.user_id = "user_id";

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
  handleError: function(store, records, jqXHR){
    console.log("handling error...")
    ownHandleError(store, records, jqXHR);
  },
  shouldSave: function(record){
    // check if valid update
    //isValid(record);
    return this._super(record);
  },
  didFindRecord: function(store, type, payload, id) {
    //console.log("didFindRecord: function(store, type, payload, id)");
    //console.log(store);
    //console.log(type);    
    //console.log(payload);
    //console.log(id);
    if (payload.status === 404) {
        console.log("404 - not found!");
        //console.log(this);
        if(id){
          //if has id redirect to index
          //this.transitionTo("index");
          /*
          var root = this.rootForType(type);
          var url = this.buildURL(root, null);
          //console.log(root);
          //console.log(url);          
          return this.ajax(url, "GET").
            then(function(json){
              return json;
                //var fixed = this._super(store, type, json, null);
                //console.log(fixed);
                //return fixed; 
                //
            });*/          
          //return this._super(store, type, payload, null);
          console.log("payload:");
          console.log(payload);
          return {"blog": {"id":0}}
        }
    }else if(payload.status === 422){
      console.log("status 422");
      console.log(payload)        
    }else{
      console.log("ok: ");
      var ok = this._super(store, type, payload, id);  
      
      console.log(ok);
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


  //shouldSave
function isValid(record){
  console.log("is valid record?")
  console.log(record)
  record.isValid();
  return true;
}