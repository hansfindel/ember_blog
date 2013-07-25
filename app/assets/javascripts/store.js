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
  hash.data.account_id = EmberBlog.SessionToken;
  hash.data.key = EmberBlog.key;
  hash.data.session_id = EmberBlog.user_id;
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