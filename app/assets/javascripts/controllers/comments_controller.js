EmberBlog.NewCommentController = Ember.ObjectController.extend({
	resourceType: EmberBlog.Comment,
	//needs: ['blogs'], 
	//blogBinding: 'blogs_controller.selectedBlog',

	addComment: function(description, blog){
		//console.log(this);
		//console.log(description);
		EmberBlog.Comment.createRecord({description: description, blog: blog});
		this.get("store").commit();
		//console.log("new comment controller");
	}
	
});
