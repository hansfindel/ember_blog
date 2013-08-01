EmberBlog.PagerBlogView = Ember.View.extend({
  templateName: 'blogs/pager_blogs',
  tagName:      'div', 

  init: function(blog){
    //this.set("object", blog);
    console.log("blog pager view")
    this._super();
  },

  submit: function(event){
    
    //this.get("controller").get("transaction").commit();
  }


});
