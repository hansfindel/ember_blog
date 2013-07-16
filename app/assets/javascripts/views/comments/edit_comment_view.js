EmberBlog.EditCommentView = Ember.View.extend({
  templateName: 'comments/edit',
  tagName:      'form', 

  init: function(c){
    console.log(c);
    this._super();
  },

  submit: function(event){
    event.preventDefault();
    console.log("submit event at editComment")
    //console.log(this.get("controller"))
    //console.log(this.get("controller").get("transaction"))
    //this.get("controller").get("store").commit();        
    this.get("controller").get("transaction").commit();
  }


});
