EmberBlog.APIModel = DS.Model.extend({
// should simplify validation on models
})

EmberBlog.APIModel.reopenClass({ 
  notify: function(string){
    console.log(string);
  }, 

  createRecord: function(params){
    console.log(this);
    if(this.valid_params(params)){
      this._super(params);
    }
  }, 
  valid_params: function(params){
  	var errors = this.get_validation_errors(params);
  	if(errors == []){
  		return true;
  	}else{
  		for(var i = 0; i < errors.length; i++){
  			this.notify(errors[i]);
  		}
  		return false;
  	}
  }, 

  presentValue: function(string){
    if(string==null || string=="")
      return false;
    return true;
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
    var format = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/; 
    return format.test(s);
  },
  usernameFormat: function(s){
    var format = /^[A-Za-z0-9._%+-]*@[A-Za-z0-9.-]*$/; // no @
    return !format.test(s);
  }, 

  get_message: function(default_message, attr_name, validation_message){
  	var message;
	if(default_message){
		if(typeof(default_message)=="string"){
			message = default_message;
		}else{
			message = default_message(attr_name)
		}
	}else{
		message = "The attribute " + attr_name + " is " + validation_message;
	}
	return message;
  },

  validations: [],
  require_presence_of: function(params_array, default_message){
  	validations = this.validations;
  	console.log(params_array);
  	for(var i = 0; i < params_array.length; i++)
	{	
		var name = params_array[i];
		console.log(name);
		var message = this.get_message(default_message, name, "required");		
		var validation = [this.presentValue, name, message];
		//console.log(validations);
		validations.push(validation);
	}
	return validations;
  }, 
  require_email_format_of: function(params_array, default_message){
	validations = this.validations;
  	for(var i = 0; i < params_array.length; i++)
	{	
		var name = params_array[i];
		var message = this.get_message(default_message, name, "not a valid email");		
		var validation = [this.emailFormat, name, message];
		validations.push(validation);
	}
	return validations;
  },
  require_username_format_of: function(params_array, default_message){
	validations = this.validations;
  	for(var i = 0; i < params_array.length; i++)
	{	
		var name = params_array[i];
		var message = this.get_message(default_message, name, "not a valid value");		
		var validation = [this.usernameFormat, name, message];
		validations.push(validation);
	}
	return validations;
  },
  
  get_validation_errors: function(params){
  	validations = this.validations; // it is needles...
  	var errors = [];
  	for(var i = 0; i < validations.length; i++){
  		// loop through validations checking the params
  		var validation = validations[i];
  		var evaluator = validation[0];
  		var evaluatee = validation[1];
  		if(!evaluator(params[evaluatee])){
  			var message = validation[2];
  			errors.push(message);
  		}
  	}
  	return errors;
  }

})