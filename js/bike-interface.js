$(document).ready(function() {
  $('#bikeForm').submit(function() {
    event.preventDefault();
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen').then(function(response) {
      response.bikes.forEach(function(bike) {
        $('#listOfbikes').append("<li>" + bike.title + "</li>");
        console.log(bike);
      });


    }).fail(function(error) {
      $('#listOfbikes').text(error.responseJSON.message);
    });
  });
});
