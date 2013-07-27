EmberBlog.LogInView = Ember.View.extend({
  templateName: 'log_in',
  tagName:      'form', 


  submit: function(e){
    e.preventDefault();
    console.log("log in views submit");
    var email = this.get("email");
    var pass = this.get("password");
    this.set('email', "");
    this.set('password', "");
    this.get('controller').send('login', email, pass);
    return false;
  }, 


});
EmberBlog.LogOutView = Ember.View.extend({
  templateName: 'log_out',
  tagName:      'form', 

  submit: function(){
    console.log("log out views submit");
    return false;
  }, 


});