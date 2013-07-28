//EmberBlog.User = DS.Model.extend({
EmberBlog.User = EmberBlog.APIModel.extend({ 
  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'), 

  blogs: DS.hasMany('EmberBlog.Blog'),
  //password:[Hash|Salt]: DS.attr('string') are for the back-end
  
  editing: DS.attr('boolean'), 
  startEdit: function(){
  	this.set("editing", true);
  }, 
  endEdit: function(){
  	this.set("editing", false);
  }, 
  isEditing: function(){
  	return this.get("editing");
  },  

  fullname: function(){
  	return this.get("username");
  }

});


EmberBlog.User.reopenClass({
  validations: [] 
});
EmberBlog.User.require_presence_of(["username", "email", "password"]);
EmberBlog.User.require_email_format_of(["email"]);
EmberBlog.User.require_username_format_of(["username"]);
EmberBlog.User.require_length_validation_of(["password"], 4,16);