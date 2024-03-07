const convertToCelsius = function(degrees) {
  let f = (degrees - 32) * (5 / 9);
  return f;
};

const convertToFahrenheit = function(degrees) {
  let c = (degrees * (9 / 5)) + 32;
  return c;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
