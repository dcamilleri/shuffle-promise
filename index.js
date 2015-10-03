'use strict';

module.exports = function(array) {
  var usedPositions = [];
  var arrayLength = array.length;

  function getIndex() {
    var randomNb = Math.floor(Math.random() * arrayLength);
    if(!usedPositions[randomNb]) {
      usedPositions[randomNb] = true;
      return randomNb;
    } else {
      return getIndex();
    }
  }

  return new Promise(function(resolve, reject) {
    if(!array.length) {
      reject(new Error('Randomize error: Array is empty.'));
    }
    var randomizedArray =
      array.map(function() {
        var randomIndex = getIndex();
        return array[randomIndex];
      });
    resolve(randomizedArray);
  });
};