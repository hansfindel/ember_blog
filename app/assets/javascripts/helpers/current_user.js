Ember.Handlebars.registerBoundHelper('current_user', function() {
  /*user_id = EmberBlog.user_id;
  if(typeof(user_id) == "number"){
    return (user_id > 0);
  }else{
    return false;
  }*/
  return EmberBlog.current_user;
}) //.property('EmberBlog.user_id');
