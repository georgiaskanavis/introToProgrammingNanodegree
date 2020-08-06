// defining DOM elements - sizePicker and pixelCanvas.
// sizePicker - calculates the length and width of the canvas, given by user input in #inputWidth and #inputHeight.
// pixelCanvas - visual display of the canvas.
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// defining variables - height, width and color.
var height = document.getElementById('inputHeight'); // returns the value for height the user submits.
var width =  document.getElementById('inputWidth'); // returns the value for width the user submits.
var color = document.getElementById('colorPicker'); // returns the color value the user submits via the colorPicker.

// when the sizePicker form is 'submitted' by the user (height and width are specified), call makeGrid().
sizePicker.addEventListener('submit', function(e) { // EventListener attaches an event handler to the specified element ('sumbit') - The 'function(e)' is called only when the specified event occurs.
  pixelCanvas.innerHTML = ''; // resets the innerHTML property of the pixelCanvas - allows for a new table to be submitted each time. Resets/clears the table.
  e.preventDefault();
  makeGrid();
})

// when a user 'clicks' on a grid square, change the color of the square to the color specified by the user.
pixelCanvas.addEventListener('click', function(e) {
  if(e.target.nodeName == 'TD') { // if and only if the user selects the grid squares.
    e.target.style.backgroundColor = color.value; // change the color of the square to the color specified with the colorPicker.
  };
})

// takes the variables height, width specified by the user and creates a table (pixelCanvas).
function makeGrid() {
  for(i = 0; i < height.value; i = i + 1) {
    const row = pixelCanvas.insertRow(i); // for 0 - height.value, create and append a new row element to the pixelCanvas.
    for(j = 0; j < width.value; j = j + 1) {
      row.insertCell(j); // for every row, for 0 - width.value, create and append a new cell element to the pixelCanvas.
    };
  };
}
