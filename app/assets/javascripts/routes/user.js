EmberBlog.UsersRoute = Ember.Route.extend({
	// many tables -> should be managed by an ArrayController
	model: function() {
		// body...
		users = EmberBlog.User.find();
		//console.log(blogs);
		return users;
	}
});