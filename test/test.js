/* globals describe it before after */

'use strict';

var expect = require('chai').expect;
var shufflePromise = require('../index');

describe('Shuffling the array', function() {
  it('should return a promise', function () {
    var array = [1, 2, 3];
    var promise = shufflePromise(array);
    expect(promise instanceof Promise).to.be.true; 
    expect(typeof promise.then).to.equal('function');
  });

  it('should return an error if the array is empty', function () {
    var array = [];
    var randomizePromise = shufflePromise(array);
    var customError = 'Error: Randomize error: Array is empty.';
    return randomizePromise
      .catch(function(error) {
        expect(error).to.not.equal(undefined); 
        expect(error.toString()).to.equal(customError.toString()); 
      });
  });

  it('should return an array if the array is not empty', function () {
    var array = ['one', 2, 'three', {four: 4}, 'five'];
    var randomizePromise = shufflePromise(array);
    return randomizePromise
      .then(function(randomizedArray) {
        expect(randomizedArray.length).to.equal(array.length);
        expect(typeof randomizedArray).to.deep.equal('object');
        expect(randomizedArray instanceof Array).to.be.true;
      });
  });

  it('should return an array that is randomized compared to the first one', function () {
    var array = ['one', 2, 'three', {four: 4}, 'five', 6, 'seven', 8, 9, 'ten'];
    var randomizePromise = shufflePromise(array);
    return randomizePromise
      .then(function(randomizedArray) {
        expect(randomizedArray.toString()).to.not.equal(array.toString());
      });
  });
});