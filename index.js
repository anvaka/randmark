var tests = require('./js/prngTests'),
    renderTest = require('./js/renderTest');

window.onload = function () {
  for(var test in tests) {
    if (tests.hasOwnProperty(test)) {
      renderTest(test, tests[test]());
    }
  }
};
