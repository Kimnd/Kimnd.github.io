/*Taken mostly from

https://www.freecodecamp.org/news/how-to-build-a-snake-game-in-javascript/
//Meant to run a simple game of snake
*/
//Initialization variables
let grid = document.querySelector(".grid");
let width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let intervalTime = 0;
let interval = 0;

//When the document loads, start all the stuff we need for the game to run.
document.addEventListener("DOMContentLoaded", function() {
	console.log("Intiated!");
	document.addEventListener("keyup", control);
	createBoard();
	startGame();
//	reset.addEventListener("click", replay);
});


function createBoard() {
	console.log("In createBoard");
	for (let i = 0; i < (width * width); i++) {
		let div = document.createElement("div");
		grid.appendChild(div);
	}
}

function control(e) {
	console.log("In control!");
	if (e.keycode === 39) {direction = 1;} //right
	else if (e.keycode === 38) {direction = -width;} //if we press the up arrow, the snake will go ten divs up
	else if (e.keycode === 37) {direction = -1;} //left
	else if (e.keycode === 40) {direction = +width;} //down
}


function startGame() {
	console.log("Game has started!");
	let squares = document.querySelectorAll(".grid div");
	console.log("board generated");
	randomApple(squares);
	console.log("apples generated");
	currentSnake = [2, 1, 0];
	currentIndex = 0;
	currentSnake.forEach((index) => squares[index].classList.add("snake"));
	console.log("snake made");
	interval = setInterval(moveOutcome, intervalTime);
	console.log("time exists now");
}

//Generates an "apple" at a random point on the board
function randomApple(squares) {
	console.log("In randomApple!");
	do {
		appleIndex = Math.floor(Math.random() * squares.length);
	} while (squares[appleIndex].classList.contains("snake"));
	squares[appleIndex].classList.add("bead");
}

//Defines how the snake moves, i.e. popping the
function moveOutcome() {
	// console.log("In moveOutcome()");
	let squares = document.querySelectorAll(".grid div");
	if (hitSomething(squares)) {
		currentSnake.unshift(currentSnake[0] + direction);
	}
	moveSnake(squares);
}
//  tail off and making it the new head
function moveSnake(squares) {
	// console.log("snake is moving");
	let tail = currentSnake.pop();
	// squares[tail].classList.remove("snake");
	currentSnake.unshift(currentSnake[0] + direction);
}


//Returns true if you've hit something.
function hitSomething(squares) {
	//if snake hits a wall...
	if ((currentSnake[0] + width >= width * width && direction === width) ||
      (currentSnake[0] % width === width - 1 && direction === 1) ||
      (currentSnake[0] % width === 0 && direction === -1) ||
      (currentSnake[0] - width <= 0 && direction === -width)) {
		// console.log("Hit a wall!");
		return true;
	} else {return false;}
}