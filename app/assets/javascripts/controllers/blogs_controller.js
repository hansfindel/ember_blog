EmberBlog.BlogsController = Ember.ArrayController.extend({
	sortProperties: ["id"]
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
		console.log("blog controller cancel");
		console.log(b);
		console.log(EmberBlog.Blog)
		b.deleteRecord()
		b.get("transaction").commit();
		this.transitionToRoute('blogs.index')		
	}

});

EmberBlog.NewBlogController = Ember.ObjectController.extend({
	resourceType: EmberBlog.Blog, 

	addBlog: function(title, explanation, description){
		console.log(title);
		console.log(explanation);
		console.log(description);
		EmberBlog.Blog.createRecord({title:title, explanation: explanation, description: description});
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