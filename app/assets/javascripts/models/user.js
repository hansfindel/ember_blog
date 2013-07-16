EmberBlog.User = DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string')

  //password:[Hash|Salt]: DS.attr('string') are for the back-end


});