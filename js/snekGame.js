//from https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1
// initialize config variables here
/*
let canvas = document.getElementByID("gameCanvas"),
    ctx = canvas.getContext("2d"),
    dpi = window.devicePixelRatio;
*/
/*
function makeHouse(ctx) {
  console.log("in makehouse");
  ctx.lineWidth = 10;

  // Wall
  ctx.strokeRect(75, 140, 150, 110);

  // Door
  ctx.fillRect(130, 190, 40, 60);

  // Roof
  ctx.beginPath();
  ctx.moveTo(50, 140);
  ctx.lineTo(150, 60);
  ctx.lineTo(250, 140);
  ctx.closePath();
  ctx.stroke();
}
*/
// setup config variables and start the program
function init () {
  console.log("inited!");
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');
//  dpi = window.devicePixelRatio;
  makeSquare(ctx, 1, 12);
//  makeHouse(ctx);

//  animate(ctx);
  console.log("stroked!");
}

/*
requestAnimationFrame(animate);

function animate(ctx) {
//  dpi_adjust();
  console.log("in animate");
//  ctx.beginPath();
  ctx.fillRect(25, 50, 25, 25);
//  ctx.beginPath();
  ctx.arc(500, 50, 300, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.font = "30px Arial";
  ctx.fillText("Hello World", 10, 50);
  requestAnimationFrame(animate);
}
*/


function makeSquare(ctx, length, numSquares) {

  ctx.beginPath();
  for (i = 0;i <= numSquares;i++) {
    console.log("current length: " + length + ".");
    console.log("numSquares: " + numSquares + ".");
    ctx.strokeRect(length, length, length, length);
    length = (length * 2);
    i++;
  }
}

/*
function fix_dpi() {
//create a style object that returns width and height  let style = {
    height() {return + getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);},
    width() {return + getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);}
  //set the correct attributes for a crystal clear image!
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}
*/
/*
  ctx.strokeRect(00, 8, 8, 8);
  ctx.strokeRect(00,16,16,16);
  ctx.strokeRect(00,32,32,32);
  ctx.strokeRect(00,64,64,64);
*/




// wait for the HTML to load
//document.addEventListener('DOMContentLoaded', init);
