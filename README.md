# shuffle-promise
Simple array randomization with a promise.

[![Build Status](https://travis-ci.org/dcamilleri/shuffle-promise.svg)](https://travis-ci.org/dcamilleri/shuffle-promise)

## Install

```
$ npm install --save shuffle-promise
```

## Usage

```js
var shufflePromise = require('shuffle-promise');
var srcArray = [1, 2, 'Foo', {bar: 1}];

shufflePromise(srcArray)
	.then(function(shuffledArray) {
		// ['Foo', 2, {bar: 1}, 1] Yay!	
	})
	.catch(function(error) {
		// Catch errors
	});
```

## License

MIT © [Dorian Camilleri](https://github.com/dcamilleri>)
