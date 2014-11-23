'use strict';

module.exports = function(weather) {
  if (weather === 'nice') return 'Now go open that door.';
  if (weather === 'rain') return "It's drier in the shower.";
  if (weather === 'cold') return 'Brr.';
  if (weather === 'wind') return 'The wind-ruffled look is so ten minutes ago.';
};
