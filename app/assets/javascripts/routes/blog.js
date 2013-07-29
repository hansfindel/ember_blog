EmberBlog.BlogsRoute = Ember.Route.extend({
	// many tables -> should be managed by an ArrayController

	model: function() {		
		// body...
		initializeSession(); //sets session if inexistent

		blogs = EmberBlog.Blog.find();
		//console.log(blogs);
		return blogs;
	}
});

EmberBlog.BlogRoute = Ember.Route.extend({
	// many tables -> should be managed by an ArrayController
	model: function(params) {
		blog = EmberBlog.Blog.find(params.blog_id);
		//console.log("blog find");
		//console.log(blog.get("id"));
		//console.log("asdfasdfa passing throuth blog router")
		//console.log(blog)
		return blog;
	}
});