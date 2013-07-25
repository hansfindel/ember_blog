EmberBlog.User = DS.Model.extend({
//EmberBlog.User = EmberBlog.APIModel.extend({ 
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
  createRecord: function(params){
    if(this.valid_params(params)){
      this._super(params);
    }
  }, 
  valid_params: function(params){
    valid = true;
    if(this.invalidUsername(params["username"])){
      valid = false;
      this.notify("There must be a valid username");
    }
    if(this.invalidEmail(params["email"])){
      valid = false;
      this.notify("There must be a valid email account");
    }
    if(this.invalidPassword(params["password"])){
      valid = false;
      this.notify("There must be a valid password");
    }
    return valid;
  }, 
  invalidUsername: function(s){
    return this.presentValue(s) || !(this.usernameFormat(s)); 
  },
  invalidEmail: function(s){
    return this.presentValue(s) || !(this.emailFormat(s)); 
  },
  invalidPassword: function(s){
    return this.presentValue(s) || !(this.validSize(s,4,16)) ;
  },

  presentValue: function(string){
    if(string==null || string=="")
      return true;
    return false;
  }, 
  validSize: function(string, min, max){
    min = min || -1;
    max = max || string.length + 1;
    //console.log(min, "- - -", max);
    if(typeof(string) == "string"){
      if(string.length < min){
        return false;
      }
      if(string.length > max){
        return false;
      }
      return true;
    }
    return false;
  },
  emailFormat: function(s){
    format = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/; 
    return format.test(s);
  },
  usernameFormat: function(s){
    format = /^[A-Za-z0-9._%+-]*@[A-Za-z0-9.-]*$/; // no @
    return !format.test(s);
  },
  notify: function(string){
    console.log(string);
  }
})