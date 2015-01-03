'use strict';

var chai = require('chai');
var chaihttp = require("chai-http");
var expect = chai.expect;
require('../../server.js');
chai.use(chaihttp);
var port = process.env.PORT || 3000;

var url = 'http://localhost:' + port;

describe('checking the weather in Seattle', function() {
  this.timeout(8000);
  it('should return the current temperature, weather, and winds for a given latitude and longitude', function(done) {
    chai.request('http://localhost:3000')
    .post('/findweather')
    //lat-long for Hilo, HI: {'latitude': 19.72, 'longitude': -155.07}
    .send({'latitude': 47.6062078760005, 'longitude': -122.33206612699968})
    .end(function(err, res) {
      expect(res.body).to.have.property('temperature');
      expect(res.body).to.have.property('conditions');
      expect(res.body).to.have.property('windSpeed');
      done();
    });
  });
});
