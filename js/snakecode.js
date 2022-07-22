/*Taken mostly from the various tutorials found here:
https://www.w3schools.com/graphics/game_intro.asp
More specific sources will be provided as relevant in the code
*/
//Initialization variables
//Board variables
var gameBoard;
var boardwidth = 470;
var boardheight = 200;
var gridsize = 10;
//Game object variables!
var agameobj;

//
document.addEventListener("DOMContentLoaded", function() {
  // document.addEventListener("keyup", control);
  console.log("Load event listener added");
  startGame();
  // init();
});
/*
function control(e) {
  window.addEventListener('keydown', function (e) {
    gameBoard.keys = (gameBoard.keys || []);
    gameBoard.keys[e.keyCode] = (e.type == "keydown");
    // document.getElementById("keydown").innerHTML = "keys down: " + gameBoard.keys;
  });
  window.addEventListener('keyup', function (e) {
    gameBoard.keys[e.keyCode] = (e.type == "keydown");
//document.getElementById("keyup").innerHTML = "keys up : " + gameBoard.keys;
  });

  // gameBoard.keys = (gameBoard.keys || []);
  // gameBoard.keys[e.keyCode] = (e.type == "keydown");
}
*/
//Starts the game
function startGame() {
  console.log("Game has started!");
  gameBoard.start();
  agameobj = new gameobject(4*gridsize, 2*gridsize, "blue");
}

//Generic game object constructor
function gameobject(width, height, color = "orange", x = gridsize, y = gridsize) {
  this.width = width;
  this.height = height;
  this.color = color;
  this.x = x;
  this.y = y;
  this.speedx = 0;
  this.speedy = 0;
  this.update = function() {
    ctx = gameBoard.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newposition = function() {
    // console.log("moving!");
    this.x += this.speedx;
    this.y += this.speedy;
  }
}


//Creates the game board on which everthing will be drawn!
var gameBoard = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = boardwidth;
    this.canvas.height = boardheight;
    this.context = this.canvas.getContext("2d");
    // target = document.getElementByID("gameBoard");
    document.body.replaceChild(this.canvas, document.body.childNodes[5]);
    // document.getElementById("gameBoard").insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateBoard, 10);

    window.addEventListener('keydown', function (e) {
      gameBoard.keys = (gameBoard.keys || []);
      gameBoard.keys[e.keyCode] = (e.type == "keydown");
      console.log("keydown");
      document.getElementById("keydown").innerHTML = "keys down: " + gameBoard.keys;
    })
    window.addEventListener('keyup', function (e) {
      // gameBoard.keys[e.keyCode] = (e.type == "keyup");
      gameBoard.keys[e.keyCode] = false;
      console.log("KEYUP");
//document.getElementById("keyup").innerHTML = "keys up : " + gameBoard.keys;
    })
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

//Updates the game board
function updateBoard() {
  gameBoard.clear();
  // console.log("gameboard.key: " + gameBoard.keys + ".");
  agameobj.speedx = 0;
  agameobj.speedy = 0;
  // if (gameBoard.key  == 37)
  if (gameBoard.keys && gameBoard.keys[37]){
    console.log("37");
    agameobj.speedx = -1;
  }
  // if (gameBoard.key  == 39)
  if (gameBoard.keys && gameBoard.keys[39]){
    console.log("39");
    agameobj.speedx = 1;
  }
  // if (gameBoard.key  == 38)
  if (gameBoard.keys && gameBoard.keys[38]){
    console.log("38");
    agameobj.speedy = -1;
  }
  // if (gameBoard.key  == 40)
  if (gameBoard.keys && gameBoard.keys[40]){
    console.log("40");
    agameobj.speedy = 1;
  }

  // agameobj.x += gridsize;
  agameobj.newposition();
  agameobj.update();
}

