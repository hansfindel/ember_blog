EmberBlog.Blog = DS.Model.extend({
  title: DS.attr('string'),
  explanation: DS.attr('string'),
  description: DS.attr('string'), 

  comments: DS.hasMany('EmberBlog.Comment'),
  //comments: DS.hasMany('EmberBlog.Comment' , {embedded: true}),
  //comments: DS.attr('Array'), //this is not recognized

  // front end property
  editing: DS.attr('boolean'), 
  selected: DS.attr('boolean'),

  select: function(){
  	this.set('selected', true);
  },
  unselect: function(){
  	this.set('selected', false);
  },

  isEditing: Ember.computed(function(){
  	return this.get("editing");
  }).property("editing"), 

  startEdit: function(){
  	this.set("editing", true);
  }, 
  endEdit: function(){
  	this.set("editing", false);
  },
  getComments: function(){
  	return this.get("comments");
  },
/*
  text: function() {
  	return this.get("description");
  }.property("description"), 
*/

  titled: Ember.computed(function() {
    var val = this.get('title');
    if(!this.get('id')){
    	val = val + '(*)';
    } 
    return val;
  }).property('title', 'id')

});

/*
EmberBlog.Blog.FIXTURES = [{
  id: 1,
  title: "title 1", 
  explanation: "adsfaf 1", 
  description: "desc1",
  comments: [3,4,5,6]
}, {
  id: 2,
  title: "title 2", 
  explanation: "adsfaf 2", 
  description: "desc2 sd fadsf s",
  comments: []
}, {
  id: 3,
  title: "title 3", 
  explanation: "adsfaf 3", 
  description: "desc2 sd fadsf s",
  comments: [1, 2, 7]
}];
//  */