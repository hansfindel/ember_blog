var key = "key";
var user_id =  "user_id";

var apiAdapter = DS.RESTAdapter.create({
    namespace: 'api/v1'
    , bulkCommit: false
    /*
    , ajax: function(url, type, hash) {
    	if (Ember.isEmpty(hash)) hash = {};
    	if (Ember.isEmpty(hash.data)) hash.data = {};
    	hash.data.app_account_id = "ember_blog-los_blogos::app";
    	hash.data.key = key;
    	hash.data.user_id = user_id;
    	this._super(url, type, hash);
  	}
  	*/
  });

EmberBlog.Store = DS.Store.extend({
  revision: 11, 
  //adapter: 'DS.FixtureAdapter' /*
  adapter: apiAdapter 
});

//EmberBlog.Store.adapter.serializer.map('EmberBlog.Post', {comments: {'embedded': 'load'}});