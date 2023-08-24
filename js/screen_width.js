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
//var showWidth = document.getElementByID("width_target");
//window.addEventListener("resize", widthReport);

var widthtarget = document.getElementById("widthtarget");
  
function getwidth() {
  var width = window.innerWidth;
  // widthtarget.innerHTML = width + " pixels";
  console.log("Width is: " + width + " pixels.");

}
/*




document.addEventListener("resize", widthReport);

//function that prints the screen width to the console
function widthReport() {

  width = window.innerWidth;
  console.log("Width is: " + width + " pixels.");
//  document.getElementByID("width_target").innerHTML = "width is: " + width + " pixels.";
  return width;
}
/* Code to diplay width by innerHTML taken from geeks for geeks, tested with w3schools
https://www.geeksforgeeks.org/how-to-get-the-device-screhow-to-get-the-width-of-device-screen-in-javascript-en-width-in-javascript/
https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_onresize

<!DOCTYPE html>
<html> 
  <head> 
    <title> 
      How to get the device screen width in JavaScript ?
    </title>
  </head> 
    
  <body onresize="getwidth()"> 
    
    <h1>GeeksForGeeks</h1>
    <button onclick = "getwidth()">click here</button>
    <p id = "widthtarget"></p>
    <!-- Script to display the device screen width -->
    <script>
      var widthtarget = document.getElementById("widthtarget");
        
      function getwidth() {
        var width = window.innerWidth;
        widthtarget.innerHTML = width + " pixels";
      }
    </script> 
  </body> 
</html>
*/