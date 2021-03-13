//Javascript code for the Kojima Name Generator!
//
var fullname = "brian david gilbert";
function displayName() {
  document.getElementById("displayFullName").innerHTML = fullname;
  console.log("name to display: " + fullname + "\n");
}
function assignName() {
  fullname = document.getElementById("fullname").value;
  console.log("var fullname is: " + fullname + "\n");
}
function rollD(diceSides) {

}

//source: https://attacomsian.com/blog/javascript-generate-random-numbers