/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var superagent = require('superagent');

var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/build/'));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.post('/findweather', function(req, res) {

//receive lat long from html5 geolocation
  var lat = req.body.latitude;
  var lon = req.body.longitude;

  var noaaUrl = 'http://forecast.weather.gov/MapClick.php?lat=' +
    lat +
    '&lon=' +
    lon +
    '&unit=0&lg=english&FcstType=json';

  superagent
//use that lat and long in the request to weather.gov
    .get(noaaUrl)

//receive the data and return it in the response to the client
    .end(function(err, response) {
      if (err) console.log('superagent req error ' + err);

      var prettified = JSON.parse(response.text);
      var temp = prettified.currentobservation.Temp;
      var weather = prettified.currentobservation.Weather;
      var wind = prettified.currentobservation.Winds;
      res.json({temperature: temp, conditions: weather, windSpeed: wind});
    });
});

app.listen(port, function() {
  console.log('Server started on port %d', port);
});
