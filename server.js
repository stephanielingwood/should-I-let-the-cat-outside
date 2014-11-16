/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
// var reqLib = require('request');
var superagent = require('superagent');

var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static(__dirname + '/public/'));


app.get('/', function(req, res) {
  res.sendfile('index.html');
});


app.post('/findweather', function(req, res) {
  console.log("post req started");
  console.log(req.body);

//receive lat long from html5 geolocation
  var lat = req.body.latitude;
  var lon = req.body.longitude;
  // var lat = 47.54583;
  // var lon = -122.31;
  console.log('lat ' + lat);
  console.log('lon ' + lon);

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
          console.log(typeof(weather));
      var wind = prettified.currentobservation.Winds;
      res.json({temperature: temp, conditions: weather, windSpeed: wind});
      console.log(res.body);
    // res.send(prettified);
    });
});


app.listen(port, function() {
  console.log('Server started on port %d', port);
});
