EmberBlog.NewBlogView = Ember.View.extend({
  templateName: 'new_blog',
  tagName:      'form', 


  submit: function(){
    //console.log(this);
    //this.get('controller').send('addPost', this.get('newPostTitle'), this.get('newPostBody'))
    //this.createPost();
    var titl = this.get("title"), 
    	expl = this.get("explanation"), 
    	cont = this.get("description");
    this.get('controller').send('addBlog', titl, expl, cont);
    //console.log("asdf");
    this.set('title', "");
    this.set('explanation', "");
    this.set('description', "");
    return false;
  }

/*
  ,cancel: function(){
    console.log("view cancel");
    this.set('title', "");
    this.set('explanation', "");
    this.set('content', "");
    return false;
  }
*/

});
