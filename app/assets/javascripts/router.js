EmberBlog.Router.map(function() {
	this.resource("blogs", function(){
		this.resource("new_blog")
		this.resource("blog", {path: ":blog_id"})
	});
	this.resource("users", function(){
		this.resource("new_user")
		this.resource("user", {path: ":user_id"})
	});
});

EmberBlog.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo("blogs")
	}
}); 