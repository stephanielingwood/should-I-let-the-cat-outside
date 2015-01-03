/*jshint browserify: true */
'use strict';

var $ = require('jquery');
var conditions = require('./conditions.js');
var comment = require('./comment.js');

var getWeather = function(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;

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
};

$(document).ready(function() {
//get geolocation data on page load
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather, function(err) {
      if (err) $('#commenttext').html(comment('err'));
    });
  } else {
    $('#commenttext').html(comment('nolocation'));
  }
});
