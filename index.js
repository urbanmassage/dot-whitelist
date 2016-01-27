var dot = require('dot-object');

module.exports = function dotWhitelist(input, whitelistArray) {
  if(!Array.isArray(whitelistArray)) {
    return input;
  }

  var output = {};

  whitelistArray.forEach(function(key) {
    dot.copy(key, key, input, output);
  });

  return output;
};
