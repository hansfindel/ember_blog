EmberBlog.BlogsRoute = Ember.Route.extend({
	// many tables -> should be managed by an ArrayController
	model: function() {		
		// body...
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
		//console.log(blog);
		//console.log(blog.get("id"));

		if(blog.get("id") != "44") //the intention is to redirect to blogs when not found			
			return blog;
		else{
			this.transitionTo("blogs");
		}
	}
});