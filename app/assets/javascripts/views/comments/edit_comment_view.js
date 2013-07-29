EmberBlog.EditCommentView = Ember.View.extend({
  templateName: 'comments/edit',
  tagName:      'form', 

  init: function(){
    this._super();
  },

  submit: function(event){
    event.preventDefault();
    //console.log("submit event at editComment")
    //blog.endEditingComment(); //must be before sending the transaction or after response is received
    //this.get("controller").get("transaction").commit();
    //console.log(this);
    //this.get("controller").get("store").commit();        
  }


});
