//Javascript code for the Kojima Name Generator!
//
var fullname = "brian david gilbert";
function displayName() {
  document.getElementById("displayFullName").innerHTML = fullname;
  console.log("name to display: " + fullname + "\n");
}
function assignName() {
  fullname = document.getElementById("fullname").value;
  console.log("var fullname is now: " + fullname + "\n");
}

function rollD(diceSides = 6) {
  var dieResult;
  var min = 1;
  var max = diceSides;

  dieResult = Math.floor(Math.random() * ((max - min) + 1) + min);
  var resultText = "D" + diceSides + " dice result: " + dieResult + ".";
//  dieResult = Math.floor(Math.random() * 1.01);
  console.log(resultText);
  document.getElementById("diceRollTray").innerHTML = resultText;

  return dieResult;
}

//source: https://attacomsian.com/blog/javascript-generate-random-numbers