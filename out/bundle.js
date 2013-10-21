;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var tests = require('./js/prngTests'),
    renderTest = require('./js/renderTest');

window.onload = function () {
  for(var test in tests) {
    if (tests.hasOwnProperty(test)) {
      renderTest(test, tests[test]());
    }
  }
};

},{"./js/prngTests":2,"./js/renderTest":3}],2:[function(require,module,exports){
  module.exports = {
    'Math.random()': function () {
      // Standard Math.random() function
      return function(max) {
          return (Math.random() * max) << 0;
      };
    },
    'Robert Jenkins\' 32 bit integer hash function': function () {
      // Thanks for John-David Dalton for pointing this out. This is taken
      // from https://code.google.com/p/octane-benchmark/source/browse/trunk/base.js#89
      var seed = +new Date();
      var random = function() {
        // Robert Jenkins' 32 bit integer hash function.
        seed = ((seed + 0x7ed55d16) + (seed << 12))  & 0xffffffff;
        seed = ((seed ^ 0xc761c23c) ^ (seed >>> 19)) & 0xffffffff;
        seed = ((seed + 0x165667b1) + (seed << 5))   & 0xffffffff;
        seed = ((seed + 0xd3a2646c) ^ (seed << 9))   & 0xffffffff;
        seed = ((seed + 0xfd7046c5) + (seed << 3))   & 0xffffffff;
        seed = ((seed ^ 0xb55a4f09) ^ (seed >>> 16)) & 0xffffffff;
        return (seed & 0xfffffff) / 0x10000000;
      };

      return function(max) {
          return (random() * max) << 0;
      };
    }
  };

},{}],3:[function(require,module,exports){
var strideSize = 512;

module.exports = function renderRandom(name, random) {
  var ctx = createTestContext(name);
  var size = strideSize * strideSize;
  var testsCount = size/2;
  for (var i = 0; i < testsCount; ++i) {
      var pos = random(size);
      var y = Math.round(pos/strideSize);
      var x = pos % strideSize;
      ctx.fillRect(x, y, 1, 1);
  }
};

function createTestContext(name) {
  var test = document.createElement('div');
  var title = document.createElement('h3');
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', strideSize);
  canvas.setAttribute('height', strideSize);

  title.innerText = name;
  test.appendChild(title);
  test.appendChild(canvas);

  document.body.appendChild(test);
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,1)';
  return ctx;
}

},{}]},{},[1])
;