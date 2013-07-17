EmberBlog.UsersController = Ember.ArrayController.extend({
});

EmberBlog.UserController = Ember.ObjectController.extend({
	resourceType: EmberBlog.User, 

	editUser: function(u){
		u.startEdit();
	},
	endUpdate: function(u){
		u.endEdit();
		return true;
	}, 

	deleteUser: function(u){
		//console.log(u)
		u.deleteRecord()
		u.get("transaction").commit();
		this.transitionToRoute('users.index')		
	}
});

EmberBlog.NewUserController = Ember.ObjectController.extend({
	resourceType: EmberBlog.User, 

	addUser: function(username, email, password){
		EmberBlog.User.createRecord({username:username, email: email, password: password});
		this.get("store").commit();
	}
});


EmberBlog.EditUserController = Ember.ObjectController.extend({
	updateUser: function(u){
		//this.get("store").commit();		
		this.get("transaction").commit();
	}

})