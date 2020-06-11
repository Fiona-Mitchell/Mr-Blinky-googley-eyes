var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  MouseY: {}
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;

var handleMouseMove = function (event) {
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  console.log('fraction', input.mouseX.fraction)
}

var handleResize = function () {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
}

window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleResize)
