EmberBlog.Router.map(function() {
	//if(EmberBlog.current_user){
		//EmberBlog.singleRouter = EmberBlog.singleRouter || this;
		this.resource("blogs", function(){
			this.resource("new_blog")
			this.resource("blog", {path: ":blog_id"})
		});
		this.resource("users", function(){
			this.resource("new_user")
			this.resource("user", {path: ":user_id"})
		});		
	//} 
	this.resource("log_in");
});

EmberBlog.IndexRoute = Ember.Route.extend({
	redirect: function(){
		//EmberBlog.singleRouter = EmberBlog.singleRouter || this;
		if(EmberBlog.current_user){
				this.transitionTo("blogs");
		}else{
			this.transitionTo("log_in");
		}
	}
}); 
