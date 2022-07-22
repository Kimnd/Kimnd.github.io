/*Taken mostly from the various tutorials found here:
https://www.w3schools.com/graphics/game_intro.asp
More specific sources will be provided as relevant in the code
*/
//Initialization variables
//Board variables
var boardwidth = 470;
var boardheight = 200;
//Game object variables!
var agameobj;

document.addEventListener("DOMContentLoaded", function() {
	// document.addEventListener("keyup", control);
	console.log("Load event listener added");
	startGame();
	// init();
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
	agameobj = new gameobject(30, 20, "blue");
}

//Creates the game board on which everthing will be drawn!
var gameBoard = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = boardwidth;
		this.canvas.height = boardheight;
		this.context = this.canvas.getContext("2d");
		// target = document.getElementByID("gameBoard");
    document.body.replaceChild(this.canvas, document.body.childNodes[4]);
    // document.getElementById("gameBoard").insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateBoard, 100);
   },
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
};

//Updates the game board
function updateBoard() {
	gameBoard.clear();
	agameobj.x += 1;
	agameobj.update();
}

//Generic game object constructor
function gameobject(width, height, color = "orange", x = 10, y = 10) {
	this.width = width;
	this.height = height;
	this.color = color;
	this.x = x;
	this.y = y;
	this.update = function() {
		ctx = gameBoard.context;
		ctx.fillStyle = color;
	  ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
