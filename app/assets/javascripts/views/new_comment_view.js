EmberBlog.NewCommentView = Ember.View.extend({
  templateName: 'new_comment',
  tagName:      'form', 

  init: function(b){
    this._super();
    console.log("new comment")
    /*
    console.log(this); 
    console.log(b);   
    console.log(blog);
    console.log(blog.get("id"));
    // */
  },

  submit: function(){
    //console.log("new comment views submit");
    var cont = this.get("description");
    //console.log(this.get('controller'));
    
    
    this.get('controller').send('addComment', cont, blog);

    this.set('description', "");
    return false;
  }

});
