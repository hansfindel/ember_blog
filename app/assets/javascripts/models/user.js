EmberBlog.User = DS.Model.extend({
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