# shuffle-promise
Shuffle an array with a promise

[![Build Status](https://magnum.travis-ci.com/dcamilleri/shuffle-promise.svg?token=aNpmikxhysGoeT5oNauy)](https://magnum.travis-ci.com/dcamilleri/shuffle-promise)

## Install

```
$ npm install --save shuffle-promise
```

## Usage

```js
var shufflePromise = require('shufflePromise');
var srcArray = [1, 2, 'Foo', {bar: 1}];

shufflePromise(srcArray).then(function(shuffledArray) {
	// ['Foo', 2, {bar: 1}, 1] !	
});
```

## License

MIT © [Dorian Camilleri](https://github.com/dcamilleri>)
