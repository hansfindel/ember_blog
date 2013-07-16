EmberBlog.Store = DS.Store.extend({
  revision: 11, 
  //adapter: 'DS.FixtureAdapter' /*
  adapter: DS.RESTAdapter.create({
    namespace: 'api/v1'
    , bulkCommit: false
  })   //*/  
});

//EmberBlog.Store.adapter.serializer.map('EmberBlog.Post', {comments: {'embedded': 'load'}});