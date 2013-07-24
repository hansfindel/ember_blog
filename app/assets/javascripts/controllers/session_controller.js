EmberBlog.LogInController = Ember.ObjectController.extend({
	
	login: function(email, pass){
		//console.log(email);
		//console.log(pass);
		// js login 
		session = EmberBlog.Session.createRecord();
		//this.get("store").commit(); // no commiting this
		apiKey = EmberBlog.key;
		log_in_request(session, apiKey, email, pass);
		//console.log("new comment controller");
	}

});


function log_in_request(ob, apiKey, email, password){
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
                    return true;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        	alert(xhr.status);
        	alert(thrownError);
        }
    });
}