EmberBlog.Router.map(function() {
	this.resource("blogs", function(){
		this.resource("new_blog")
		this.resource("blog", {path: ":blog_id"})
	});
});

EmberBlog.IndexRoute = Ember.Route.extend({
	redirect: function(){
		this.transitionTo("blogs")
	}
}); 