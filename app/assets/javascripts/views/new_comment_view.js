EmberBlog.NewCommentView = Ember.View.extend({
  templateName: 'new_comment',
  tagName:      'form', 

  init: function(b){
    this._super();
  },

  submit: function(){
    //console.log("new comment views submit");
    var cont = this.get("description");
    this.get('controller').send('addComment', cont, blog);
    this.set('description', "");
    return false;
  }

});
