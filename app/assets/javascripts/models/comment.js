EmberBlog.Comment = DS.Model.extend({
  description: DS.attr('string'),
  //blogId: DS.attr('number')
  blog: DS.belongsTo('EmberBlog.Blog')
});

 /*
EmberBlog.Comment.FIXTURES = [{
  id: 1,
  description: "1500"
}, {
  id: 2,
  description: "300"
}, {
  id: 3,
  description: "asfdasdf sdfasdf asdf ad fafgrar d s"
}, {
  id: 4,
  description: "comentario 4"
}, {
  id: 5,
  description: "300"
}, {
  id: 6,
  description: "asfdasdf sdfasdf asdf ad fafgrar d s"
}, {
  id: 7,
  description: "comentario 4"
}];

// */

/*
//blog loads before comment
EmberBlog.Blog.FIXTURES = [{
  id: 1,
  title: "title 1", 
  explanation: "adsfaf 1", 
  description: "desc1",
  comments: [
  	{id: 1, description: "first comment"}, 
  	{id: 2, description: "this is an other comment"}
  ]
}, {
  id: 2,
  title: "title 2", 
  explanation: "adsfaf 2", 
  description: "desc2 sd fadsf s",
  comments: [{
  	id: 3, description: "holo"
  }]
}, {
  id: 3,
  title: "title 3", 
  explanation: "adsfaf 3", 
  description: "desc2 sd fadsf s",
  comments: []
}];*/