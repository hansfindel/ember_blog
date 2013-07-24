EmberBlog.APIModel = DS.Model.extend({
//should add current_user_id and session key to the request
	/*
	find: function(params) {
		console.log("asdf");
		params = params || [];
		params["key"] = "session_key"
		params["user_id"] = "user_id"
		val = this._super().find(params);
		console.log("asdf");
		console.log(val);
		return val;
	}
	/*
	, 
	_resourceUrl: function() {
  		return this._super() + '?resource=r';
  	}
  	//*/
  	  //DS.Store.Ember.Object.extend.findById
  findById: function(type, id){
    console.log("findById");
    console.log(type);
    console.log(id);
    return this._super(type, id);
  }
  ,find: function(val){
  	console.log(val);
  	return this._super(val);
  }
})