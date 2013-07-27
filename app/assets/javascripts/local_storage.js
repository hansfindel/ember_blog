//supports_html5_storage()
function supports_html5_storage() {
  //try {
  //  return 'localStorage' in window && window['localStorage'] !== null;
  //} catch (e) {
  //  return false;
  //}
  return Modernizr.localstorage;
}
// *********** LocalStorage ****************
function store_record(key, value){
	if(retrieve(key)){
		console.log("This key already exists");
		new_key = String(key) + String(1);
		return store(new_key, value)
	}else{
		console.log("Saving "+ value +" in " + key);
		localStorage.setItem(key, value);	
		return key;
	}
}
function retrieve(key){
	return localStorage.getItem(key);
}
function retrieve_s(key){
	var s = retrieve(key);
	if(s == null){
		s = ""
	}
	return s;
}
function removeKey(key){
	return localStorage.removeItem(key);
}
function clear_storage(){
	return localStorage.clear();
}

// *********** LocalStorage ****************


function loadSession(session){
	if(supports_html5_storage()){
		EmberBlog.SessionToken = retrieve_s("token");
		EmberBlog.user_id = retrieve_s("user_id");
		session.set("email", retrieve_s("email"));
		session.set("username", retrieve_s("username"));		
		if([EmberBlog.user_id, EmberBlog.SessionToken].join("-")!="-"){
			EmberBlog.set("current_user", EmberBlog.user_id)
		}
	}
}
function saveSession(){
	if(supports_html5_storage()){
		destroySession();
		
		store_record( "token",    EmberBlog.SessionToken );
		store_record( "user_id",  EmberBlog.user_id );
		store_record( "email",    session.get("email") );
		store_record( "username", session.get("username") );
		
		EmberBlog.set("current_user", EmberBlog.user_id)
	}	
}
function destroySession(){
	if(supports_html5_storage()){
		removeKey("token");
		removeKey("user_id");
		removeKey("email");
		removeKey("username");
	}
	EmberBlog.set("current_user", null)
}