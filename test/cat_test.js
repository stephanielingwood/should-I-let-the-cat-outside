'use strict';

var chai = require('chai');
var chaihttp = require("chai-http");
var expect = chai.expect;
require('../server.js');
chai.use(chaihttp);
var port = process.env.PORT || 3000;

var url = 'http://localhost:' + port;

describe('checking the weather in Seattle', function() {
  this.timeout(8000);
  it('should return the current temperature, weather, and winds for a given latitude and longitude', function(done) {
      chai.request('http://localhost:3000')
      .post('/findweather')
      .send({'latitude': 19.6405, 'longitude': -155.9955582})
      .end(function(err,res){
        console.log('hi');
        console.log("res.body.conditions " + res.body.conditions);
        expect(res.body).to.have.property('temperature');
        expect(res.body).to.have.property('conditions');
        expect(res.body).to.have.property('windSpeed');
        done();
      });
  });
});

      // .send({'latitude': 47.6062078760005, 'longitude': -122.33206612699968})
