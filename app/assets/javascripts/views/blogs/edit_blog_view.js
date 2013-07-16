EmberBlog.EditBlogView = Ember.View.extend({
  templateName: 'blogs/edit',
  tagName:      'form', 

  init: function(blog){
    //this.set("object", blog);
    //console.log(blog);
    this._super();
  },

  submit: function(event){
    event.preventDefault();
    console.log("edit blog view - submit")
    //console.log(this.get("controller"))
    //console.log(this.get("controller").get("transaction"))
    //this.get("controller").get("store").commit();        
    this.get("controller").get("transaction").commit();
  }


});
