var Bike = require('./../js/bike.js').bikeModule;

var displayBikes = function(bikes) {
  bikes.forEach(function(bike) {
    $('#listOfbikes').append("<li>" + bike.title + "</li>");
    $('#listOfbikes').append("<img src='" + bike.thumb + "'>");
    console.log(bike);
  });
};


$(document).ready(function() {
  var bike = new Bike();
  $('#bikeForm').submit(function() {
    event.preventDefault();
    bike.getBikes(displayBikes);
  });
});
