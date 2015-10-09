'use strict';

module.exports = function(array) {
  if (!array.length) {
    return Promise.reject(new Error('Randomize error: Array is empty.'));
  }

  return Promise.all(array.slice().sort(function() { return 0.5 - Math.random(); }));
};