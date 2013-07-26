function initializeSession(){
	//sets it as a global variable
    if(window["session"]){}
    else{
        session = EmberBlog.Session.createRecord();
        loadSession(session); //defined in local_storage        
    }   
}

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

                    //save session in local storage
                    saveSession();

                    context.transitionToRoute('blogs')		
                    return false;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        	alert(xhr.status);
        	//alert(thrownError);
        }
    });
}

function log_out_request(ob, context){	
	user_id = EmberBlog.user_id
	apiKey = EmberBlog.key
	url = ob.deleteResourceUrl(user_id);
	$.ajax({
        url: url,
        type: "DELETE",
        data: { apiKey: apiKey, user_id: user_id },
        dataType: "json",
        success: function (result) {
            switch (result) {
                case true:
                    console.log(result);
                    break;
                default:
                	//console.log("default:")
                    //console.log(result);
                    EmberBlog.SessionToken = "";
                    EmberBlog.user_id = 0;
                    ob.set("email", "");
                    ob.set("username", "");
                    EmberBlog.set("current_user", false);

                    //delete session of local storage
                    destroySession();

					context.transitionToRoute('log_in')		
                    return true;
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        	alert(xhr.status);
        	//alert(thrownError);
        }
    });
	
}