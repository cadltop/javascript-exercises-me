const convertToCelsius = function(degrees) {
  let f = (degrees - 32) * (5 / 9);
  return parseFloat(f.toFixed(1));
};

const convertToFahrenheit = function(degrees) {
  let c = (degrees * (9 / 5)) + 32;
  return parseFloat(c.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
