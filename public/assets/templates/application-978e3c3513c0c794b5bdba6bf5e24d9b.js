Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n		    	<li class=\"name\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "blogs", options) : helperMissing.call(depth0, "linkTo", "blogs", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n		    	<li class=\"name\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "users", options) : helperMissing.call(depth0, "linkTo", "users", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n		    	<li class=\"name\"><a href=\"\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "log_out", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Log Out</a></li>\n		    ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Blogs");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("Authors");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n		    	<li class=\"name\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "log_in", options) : helperMissing.call(depth0, "linkTo", "log_in", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n		    ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("Log In");
  }

  data.buffer.push("<div class=\"row\" style=\"margin-top:2px;\"></div>\n<div class=\"row\">\n	<div class=\"twelve columns\">\n		<nav class=\"top-bar blue-top-bar\">\n		  <ul class=\"title-area\">\n		  	<li class=\"name\">\n		  		<h1 class=\"title\">Los Blogos</h1>\n		  	</li> \n		  </ul>\n		  <ul class=\"title-area right\">\n		  	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "EmberBlog.current_user", {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		  </ul>\n		</nav>\n		<hr>	\n	</div>\n</div>\n<div class=\"row\">\n	<div class=\"twelve columns\">\n		<p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n	</div>\n</div>\n\n<div class=\"row footer\">\n	<div class=\"twelve columns\">\n		<hr>\n		<div class=\"row\">\n			<div class=\"four columns\">\n			</div>\n			<div class=\"four columns\">\n				<p>Read and leave your thoughts</p>\n			</div>\n			<div class=\"four columns\">\n			</div>\n		</div>\n	</div>\n</div>\n");
  return buffer;
  
});
