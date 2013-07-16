EmberBlog.BlogView = Ember.View.extend({
  templateName: 'blog',   

  init: function(){
  	this._super();
  	//this.selectThisBlog();  // can be eliminated, this happens at blogsController level
  },
  selectThisBlog: function(){
  	//mark current blog as selected -> replace value of blog-route:blog to this one
    //get the id of selected blog
    //blog_id = 5
    //blog = EmberBlog.Blog.find(blog_id)
  }

});
