EmberBlog.Session = DS.Model.extend({
//EmberBlog.Comment = EmberBlog.APIModel.extend({  
  email: DS.attr('string'),
  username: DS.attr('string'), 

  // token & user_id are stored in the EmberBlog::App
  //token: DS.attr('string'),
  //user_id 
  
  resourceUrl: function(){
  	//apiAdapter is separated from the rest of the app
  	namespace = apiAdapter.namespace;
  	resource = apiAdapter.rootForType("Sessions");
  	url = [namespace, resource].join("/")
  	return url;
  }, 


  current_user: Ember.computed(function(){
	  user_id = EmberBlog.user_id;
	  if(typeof(user_id) == "number"){
	    return (user_id > 0);
	  }else{
	    return false;
	  }
	  return false;
  }).property("email")



});
