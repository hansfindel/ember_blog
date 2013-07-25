// the alpha controller... should receive each unhandled action (due to the bubbling thing)
EmberBlog.ApplicationController = Ember.ObjectController.extend({
	log_out: function(){
		if(!window["session"]){
			initializeSession();
		}

		log_out_request(session, this)
	}
})


//session controller
EmberBlog.LogInController = Ember.ObjectController.extend({
	
	login: function(email, pass){
		if(!window["session"]){
			initializeSession();
		}
		//this.get("store").commit(); // no commiting this
		apiKey = EmberBlog.key;
		success = log_in_request(session, apiKey, email, pass, this);
	}

});


// log_[in|out]_request are defined in session.js  