var apiAdapter = DS.RESTAdapter.create({
    namespace: 'api/v1'
    , bulkCommit: false
  });

EmberBlog.accountId = 'asdf';
EmberBlog.key = "key";
EmberBlog.user_id = "user_id";

EmberBlog.RESTConnector = DS.RESTAdapter.extend({
  namespace: 'api/v1',
  bulkCommit: false
});

EmberBlog.RESTAdapter = EmberBlog.RESTConnector.extend({
  // Scope all ajax calls.
  ajax: function(url, type, hash) {
  	//console.log(url);
  	//console.log(type);
  	//console.log(hash);
  	url = url + ".json"
    if (Ember.isEmpty(hash)) hash = {};
    if (Ember.isEmpty(hash.data)) hash.data = {};
    hash.data.account_id = EmberBlog.accountId;
    data = this._super(url, type, hash);
    //console.log(data);
    return data;
  },

});


EmberBlog.Store = DS.Store.extend({
  revision: 11, 
  //adapter: 'DS.FixtureAdapter' /*
  //adapter: apiAdapter 
  adapter: "EmberBlog.RESTAdapter"
});

//EmberBlog.Store.adapter.serializer.map('EmberBlog.Post', {comments: {'embedded': 'load'}});