'use strict';

$(document).ready(function() {
//get geolocation data on page load
  var lat;
  var lon;
  var latLonObj;

  navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  // lat = 19.729719634000446;
  // lon = -155.0899956029997;

  $("#locate").on("click", function() {
// console.log("latlonobj" + latLonObj);
    $.ajax({
      url: '/findweather',
      type: "post",
      data: {"latitude": lat, "longitude": lon},
      success: function(data) {
        var temp = Number(data.temperature);
        var weather = Number(data.conditions);
        var wind = Number(data.windSpeed);

        if (temp > 50 && wind < 20) {
          $('#yes').removeClass('hidden');
          $('#yes').addClass('active');
        }
        else {
          $('#no').removeClass('hidden');
          $('#no').addClass('active');
        }
      },
      dataType: 'json'
    });
  });
  });

console.log('hi');
// weather === 'Fair' || weather === 'Partly Cloudy' || weather === 'Mostly Cloudy' ||

});
