EmberBlog.UserView = Ember.View.extend({
  templateName: 'users/show'
});


EmberBlog.NewUserView = Ember.View.extend({
  templateName: 'users/form', 
  tagName:      'form', 

  submit: function(){
    //console.log("new comment views submit");
    var username = this.get("username"), 
    	email    = this.get("email"), 
    	password = this.get("password");
    this.get('controller').send('addUser', username, email, password);
    this.set("username", ""); 
    this.set("email", ""); 
    this.set("password", "");
    return false;
  }
});
