EmberBlog.NewCommentView = Ember.View.extend({
  templateName: 'new_comment',
  tagName:      'form', 

  init: function(blog){
    this._super();
    console.log(this);    
  },

  submit: function(){
    console.log("new comment views submit");
    var cont = this.get("description");
    console.log(this.get('controller'));
    this.get('controller').send('addComment', cont);

    this.set('description', "");
    return false;
  }

});
