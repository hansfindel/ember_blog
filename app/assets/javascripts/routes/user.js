EmberBlog.UsersRoute = Ember.Route.extend({
	// many tables -> should be managed by an ArrayController
	model: function() {
		initializeSession(); //sets session if inexistent
		// body...
		users = EmberBlog.User.find();
		//console.log(blogs);
		return users;
	}
});


EmberBlog.UserRoute = Ember.Route.extend({
	// many tables -> should be managed by an ArrayController
	model: function(params) {
		user = EmberBlog.User.find(params.user_id);
		//console.log("user find");
		//console.log(user);
		//console.log(blog.get("id"));

		if(user.get("id") != "44") //the intention is to redirect to blogs when not found			
			return user;
		else{
			this.transitionTo("users");
		}
	}
});