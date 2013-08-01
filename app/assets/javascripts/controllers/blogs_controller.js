EmberBlog.BlogsController = Ember.ArrayController.extend({
	sortProperties: ["id"], 


	showBlog: function(b){
		//console.log("blog=");
		//console.log(blog);
		if(blog && blog.id!="blog"){
			if(blog.isValid()){
				blog.deactivate();		
			}
			else{
				console.log("blog is invalid");
			}
		}
		blog = b;
		blog.activate();
		this.transitionToRoute('blog', blog)		
	}
});

EmberBlog.BlogController = Ember.ObjectController.extend({
	resourceType: EmberBlog.Blog,  

	editEntry: function(b){
		//console.log("editing entry");
		//console.log(b);
		b.startEdit();
	},
	endUpdate: function(b){
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
		//blog.endEditingComment();
		//blog.set("editingCommentId", c.id); //should be moved? could change with refactoring... 
		c.startEdit();
	}, 
	updateComment: function(c){
		c.endEdit();
		//c.set("description", c.get("description"))
		//c.get("transaction").commit();		
		c.save();
	} 

});

EmberBlog.NewBlogController = Ember.ObjectController.extend({
	resourceType: EmberBlog.Blog, 

	addBlog: function(title, explanation, description){
		//console.log(title);
		//console.log(explanation);
		//console.log(description);
		user_id = EmberBlog.user_id
		params = {title:title, explanation: explanation, description: description, user_id: user_id};
		EmberBlog.Blog.createRecord(params);
		this.get("store").commit(); 
		
		//console.log("new blog controller");
	}, 
	cancel: function(){
		console.log("canceling form");
	    //this.set('title', "");
    	this.transitionToRoute('blogs.index')
	}
});


EmberBlog.EditBlogController = Ember.ObjectController.extend({
	updateEntry: function(b){
		//console.log("updateEntry:")
		//console.log(b);
		b.endEdit();
		//b.get("transaction").commit();
		b.save();
	} 
})