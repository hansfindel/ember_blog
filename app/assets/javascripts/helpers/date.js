Ember.Handlebars.registerBoundHelper('date', function(date, format) {
  if (date==undefined) { return ""; }
  var d = new Date();
  if(typeof(date)==typeof(d)){
  	var curr_date = date.getDate();
    var curr_month = date.getMonth() + 1; //Months are zero based
    var curr_year = date.getFullYear();
    separator = format["separator"] || "-";
    //order
    return [curr_date, curr_month, curr_year].join(separator);
  }
  return ""
});