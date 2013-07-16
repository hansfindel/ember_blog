EmberBlog.NewCommentController = Ember.ObjectController.extend({
	resourceType: EmberBlog.Comment,
	//needs: ['blogs'], 
	//blogBinding: 'blogs_controller.selectedBlog',

	addComment: function(description){
		console.log(this);
		console.log(description);
		EmberBlog.Comment.createRecord({description: description});
		this.get("store").commit();
		console.log("new comment controller");
	}

});