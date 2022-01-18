//Program to detect how wide the screen is,
// and dynamically change the formatting

//base code sourced from:
/*https://techstacker.com/javascript-detect-if-screen-width-is-greater-or-less-than/*/

//var screenwidth = document.getElementByID("width");

window.addEventListener("resize", function() {
	//code sourced from https://www.geeksforgeeks.org/how-to-get-the-device-screhow-to-get-the-width-of-device-screen-in-javascript-en-width-in-javascript/
	console.log("Width is: " + window.innerWidth + " pixels.");
	/*
	if (window.matchMedia("(min-width: 500px)").matches) {
		console.log("Screen is at least 500px!");
	} else {
		console.log("TINY  SCREEN");
	}
	*/
});