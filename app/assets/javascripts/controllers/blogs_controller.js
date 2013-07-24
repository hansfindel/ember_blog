EmberBlog.BlogsController = Ember.ArrayController.extend({
	sortProperties: ["id"], 


	showBlog: function(b){
		console.log("blog=");
		console.log(blog);
		if(blog && blog.id!="blog"){
			blog.deactivate();	
		}
		blog = b;
		blog.activate();
		this.transitionToRoute('blog', blog)		
	}
});

EmberBlog.BlogController = Ember.ObjectController.extend({
	resourceType: EmberBlog.Blog,  

	editEntry: function(b){
		console.log("editing entry");
		console.log(b);
		b.startEdit();
	},
	endUpdate: function(b){
		//b.get("transaction").commit();
		b.endEdit();
	}, 

	cancel: function(b){
		//console.log("blog controller cancel");
		//console.log(b);
		//console.log(EmberBlog.Blog)
		b.deleteRecord();
		console.log("deleted");
		b.get("transaction").commit();
		console.log("commited");
		blog = null; //current_blog is nil
		this.transitionToRoute('blogs.index');
	}

	, deleteComment: function(c){
		//console.log(c)
		c.deleteRecord()
		c.get("transaction").commit();
	}, 


	editComment: function(c){
		//console.log(blog.editingComment()):
		blog.endEditingComment();
		blog.set("editingCommentId", c.id); //should be moved? could change with refactoring... 
		c.startEdit();
	}, 
	updateComment: function(c){
		//is not being used... this should commit the store or transaction
		blog.endEditingComment();
	}

});

EmberBlog.NewBlogController = Ember.ObjectController.extend({
	resourceType: EmberBlog.Blog, 

	addBlog: function(title, explanation, description){
		console.log(title);
		console.log(explanation);
		console.log(description);
		user_id = EmberBlog.user_id
		EmberBlog.Blog.createRecord({title:title, explanation: explanation, description: description, user_id: user_id});
		this.get("store").commit();
		console.log("new blog controller");
	}, 
	cancel: function(){
		console.log("canceling form");
	    //this.set('title', "");
    	this.transitionToRoute('blogs.index')
	}
});

EmberBlog.EditBlogController = Ember.ObjectController.extend({
	updateEntry: function(b){
		console.log("updating entry in blog controller");

	}

})