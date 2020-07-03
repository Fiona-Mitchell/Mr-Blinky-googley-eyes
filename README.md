# parallax-effect
Using the scroll position to create a parallax effect with three eyes!
The eventListener looks out for you current mouse position to determine where the eyes will look. I set each outer eye to look in the opposite directions to the mouse. 

```
// output x
output.x.current = output.x.start + (input.mouseX.fraction * output.x.range)
output.x.opposite = output.x.end - (input.mouseX.fraction * output.x.range)
output.x.inverse = output.x.end - (input.mouseX.fraction * output.x.range)

// output y
output.y.current = output.y.start + (input.mouseY.fraction * output.y.range)
output.y.opposite = output.y.end - (input.mouseY.fraction * output.y.range)
output.y.inverse = output.y.end - (input.mouseY.fraction * output.y.range)

```

<img width="886" alt="Screen Shot 2020-07-03 at 19 14 41" src="https://user-images.githubusercontent.com/47756305/86491066-7fb0ec00-bd61-11ea-9b4e-a49b2771410e.png">

Currently, the eyelid only works properly in chrome. 

Here's some of the JS variables I used:
```
var pupilsHTMLColletion = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLColletion);


var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0
  }
};

// This is an input set up
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;
```
