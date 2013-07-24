EmberBlog.LogInController = Ember.ObjectController.extend({
	
	login: function(email, pass){
		session = EmberBlog.Session.createRecord();
		//this.get("store").commit(); // no commiting this
		apiKey = EmberBlog.key;
		success = log_in_request(session, apiKey, email, pass, this);
	}

});


function log_in_request(ob, apiKey, email, password, context){
	url = ob.resourceUrl();
	$.ajax({
        url: url,
        type: "POST",
        data: { apiKey: apiKey, email: email, password: password },
        dataType: "json",
        success: function (result) {
            switch (result) {
                case true:
                    console.log(result);
                    break;
                default:
                	//console.log("default:")
                    //console.log(result);
                    EmberBlog.SessionToken = result["token"];
                    EmberBlog.user_id = result["user_id"];
                    ob.set("email", result["email"]);
                    ob.set("username", result["username"]);
                    EmberBlog.set("current_user", true);

                    context.transitionToRoute('blogs')		
                    return true;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        	alert(xhr.status);
        	alert(thrownError);
        }
    });
}