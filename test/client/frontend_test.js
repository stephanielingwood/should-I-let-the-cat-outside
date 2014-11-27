/*jshint browserify: true*/
'use strict';

var expect = require('chai').expect;
var app = require('../../app/js/app.js');
var comment = require('../../app/js/comment.js');
var conditions = require('../../app/js/conditions.js');

describe('sample client test', function() {
  it('returns a comment for a given weather type', function() {
    expect(comment('rain')).to.eql("It's drier in the shower.");
  });

  it('evaluates whether it is not inclement weather', function() {
    expect(conditions('Clear')).to.eql(true);
    expect(conditions('Funnel Cloud In Vicinity')).to.eql(false);
  });
});
