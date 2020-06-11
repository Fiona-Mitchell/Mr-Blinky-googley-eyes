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

window.addEventListener('mousemove', handleMouseMove)
