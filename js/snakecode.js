/*Taken mostly from the various tutorials found here:
https://www.w3schools.com/graphics/game_intro.asp
More specific sources will be provided as relevant in the code
*/
//Initialization variables
//Board variables
var boardwidth = 20;
var boardheight = 20;

document.addEventListener("DOMContentLoaded", function() {
	// document.addEventListener("keyup", control);
	console.log("Load event listener added");
	startGame();
	init();
})

// console.log("In snakecode!");

//let something = 1;

function init(something) {
  console.log("inited!");
  // canvas = document.getElementByTagName("canvas");
  // ctx = canvas.getContext("2d");
}

//Starts the game
function startGame() {
	console.log("Game has started!");
	gameBoard.start();
}
///*
var gameBoard = {
	canvas : document.createElement("canvas"),
	// console.log("Canvas created");
	start : function() {
		this.canvas.width = boardwidth;
		this.canvas.height = boardheight;
		this.context = this.canvas.getContext("2d");
		// target = document.getElementByID("gameBoard");
    document.body.replaceChild(this.canvas, document.body.childNodes[4]);
    // document.getElementById("gameBoard").insertBefore(this.canvas, document.body.childNodes[0]);
    },
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
};
// */