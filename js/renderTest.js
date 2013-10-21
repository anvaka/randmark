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
