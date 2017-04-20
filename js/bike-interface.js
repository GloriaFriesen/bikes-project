var Bike = require('./../js/bike.js').bikeModule;

var displayBikes = function(bikes) {
  bikes.forEach(function(bike) {
    $('#listOfbikes').append("<li>" + bike.title + "</li>");
    if (bike.thumb === null) {
      $('#listOfbikes').append("<p>Sorry, there is no image for this bike. Here's a dog instead.<p><img src='img/norman.png'>");
    } else {
      $('#listOfbikes').append("<img src='" + bike.thumb + "'>");
    }
  });
};


$(document).ready(function() {
  var bike = new Bike();
  $('#bikeForm').submit(function() {
    event.preventDefault();
    bike.getBikes(displayBikes);
  });
});
