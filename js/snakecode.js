//Taken mostly from https://www.freecodecamp.org/news/how-to-build-a-snake-game-in-javascript/
//Meant to run a simple game of snake

//Initialization variables
let grid = document.querySelector(".grid");
let width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;

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
	let squares = document.querySelectorAll(".grid div");
	console.log("Game has started!");
	randomApple(squares);
	currentSnake = [2, 1, 0];
	currentIndex = 0;
	currentSnake.forEach((index) => squares[index].classList.add("snake"));
}

function randomApple(squares) {
	console.log("In randomApple!");
	do {
		appleIndex = Math.floor(Math.random() * squares.length);
	} while (squares[appleIndex].classList.contains("snake"));
	squares[appleIndex].classList.add("bead");
}

function moveSnake(squares) {
	let tail = currentSnake.pop();
	squares[tail].classList.remove("snake");
	currentSnake.unshift(currentSnake[0] + direction);
}