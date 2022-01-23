//Program to detect how wide the screen is,
// and dynamically change the formatting

//base code sourced from:
/*https://techstacker.com/javascript-detect-if-screen-width-is-greater-or-less-than/*/

//var screenwidth = document.getElementByID("width");

/*
window.addEventListener("resize", function() {
  //code sourced from https://www.geeksforgeeks.org/how-to-get-the-device-screhow-to-get-the-width-of-device-screen-in-javascript-en-width-in-javascript/
//width = window.innerWidth;
//if (width < 500) {
//  document.getElementByID("width").style.fontSize = "60px"; doesn't work--nor does "style.size, style.font-size"
//  window.getElementByID("width")
//  window.getElementByClass("index_card").style.color = "blue";
//}
//console.log("Width is: " + window.innerWidth + " pixels.");

  //for the css stuff: https://attacomsian.com/blog/javascript-set-css-styles
  // if (window.matchMedia("(min-width: 500px)").matches) {
  //   console.log("Screen is at least 500px!");
  // } else {
  //   console.log("TINY  SCREEN");
  // }

});
*/
window.addEventListener("resize", widthReport);

//function that prints the screen width to the console
function widthReport() {

  width = window.innerWidth;
  console.log("Width is: " + width + " pixels.");
  return width;
}

document.
