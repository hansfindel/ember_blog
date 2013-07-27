EmberBlog.EditBlogView = Ember.View.extend({
  templateName: 'blogs/edit',
  tagName:      'form', 

  init: function(blog){
    //this.set("object", blog);
    this._super();
  },

  submit: function(event){
    event.preventDefault();
    //this.get("controller").get("transaction").commit();
  }


});
