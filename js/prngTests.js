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
