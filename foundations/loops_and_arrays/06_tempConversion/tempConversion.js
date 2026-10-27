const convertToCelsius = function(f) {
  retval = (f - 32) * 5/9;
  retval = Math.round(retval * 10) / 10
  return retval;
};

const convertToFahrenheit = function(c) {
  retval = (c * 9/5 +32);
  retval = Math.round(retval * 10) / 10
  return retval;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
