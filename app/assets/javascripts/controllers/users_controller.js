EmberBlog.UsersController = Ember.ArrayController.extend({
});

EmberBlog.UserController = Ember.ObjectController.extend({
	resourceType: EmberBlog.User
});

EmberBlog.NewUserController = Ember.ObjectController.extend({
	resourceType: EmberBlog.User, 

	addUser: function(username, email, password){
		EmberBlog.User.createRecord({username:username, email: email, password: password});
		this.get("store").commit();
	}
});