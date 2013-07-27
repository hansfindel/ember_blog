EmberBlog.LogInRoute = Ember.Route.extend({
	model: function(params) {
		initializeSession();
		if(EmberBlog.current_user){ //the intention is to redirect to blogs when not found			
			this.transitionTo("blogs");
		}
		else{
			console.log("ok...log in please")
		}
	}
});