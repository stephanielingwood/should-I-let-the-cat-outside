'use strict';

var $ = require('jquery');
var conditions = require('./conditions.js');
var comment = require('./comment.js');

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
      $.ajax({
        url: '/findweather',
        type: "post",
        data: {"latitude": lat, "longitude": lon},
        success: function(data) {
          var temp = Number(data.temperature);
          var weather = data.conditions;
          var wind = Number(data.windSpeed);
          var noRain = conditions(weather);
          if (temp > 50 && wind <= 15 && (noRain === true)) {
            $('#yes').removeClass('hidden');
            $('#yes').addClass('active');
            $('#commenttext').html('<p>' + comment('nice') + '</p>');
          }
          else {
            $('#no').removeClass('hidden');
            $('#no').addClass('active');
            if (!noRain) $('#commenttext').html(comment('rain'));
            if (temp <= 50) $('#commenttext').html(comment('cold'));
            if (wind > 15) $('#commenttext').html(comment('wind'));
          }
        },
        dataType: 'json'
      });
    });
  });
});
