
function Bike() {
}

Bike.prototype.getBikes = function(displayBikes) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen').then(function(response) {
    displayBikes(response.bikes);
  }).fail(function(error) {
    $('#listOfbikes').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
