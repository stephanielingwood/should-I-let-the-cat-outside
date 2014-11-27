/*jshint browserify: true*/
'use strict';

module.exports = function(input) {
  if (input === 'nice') return 'Now go open that door.';
  if (input === 'rain') return "It's drier in the shower.";
  if (input === 'cold') return 'Brr.';
  if (input === 'wind') return 'The wind-ruffled look is so ten minutes ago.';
  if (input === 'err') return 'Allow us access to your location so we can give you proper advice.';
  if (input === 'nolocation') return "Sorry! We can't find your location.";
};
