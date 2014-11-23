'use strict';

module.exports = function(weather) {
  if (weather === 'Clear') return true;
  if (weather === 'Clear with Haze') return true;
  if (weather === 'Clear and Breezy') return true;
  if (weather === 'Fair') return true;
  if (weather === 'Fair with Haze') return true;
  if (weather === 'Fair and Breezy') return true;
  if (weather === 'A Few Clouds') return true;
  if (weather === 'A Few Clouds with Haze') return true;
  if (weather === 'A Few Clouds and Breezy') return true;
  if (weather === 'Partly Cloudy') return true;
  if (weather === 'Partly Cloudy with Haze') return true;
  if (weather === 'Partly Cloudy and Breezy') return true;
  if (weather === 'Mostly Cloudy') return true;
  if (weather === 'Mostly Cloudy with Haze') return true;
  if (weather === 'Mostly Cloudy and Breezy') return true;
  if (weather === 'Overcast') return true;
  if (weather === 'Overcast with Haze') return true;
  if (weather === 'Overcast and Breezy') return true;
  return false;
};
