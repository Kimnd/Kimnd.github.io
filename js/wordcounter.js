//Script to count words in a box, mostly sourced from
// https://codesource.io/building-a-word-counter-in-javascript/

var count = document.getElementById("count");
var input = document.getElementById('input');
var currchar = document.getElementById('character');
var charnum = document.getElementById('charnum');
var str = "";
//An event listener that notes when the user types
/*
var counttext = document.createTextNode("0");
var countnode = document.getElementById("count");
countnode.appendChild(counttext);
*/
input.addEventListener('keyup', function(e) {
  // console.log("event listener fired!");
  wordcount(e.target.value);

});



function wordcount(text) {
  //note: when input area was changed to a span, needed to change from
  //var text = input.value.split(' ');
  //source: https://www.geeksforgeeks.org/javascript-get-the-text-of-a-span-element/
  var text = input.innerText.split(' ');
  var wordcount = 0;
  for (var i = 0; i < text.length; i++) {
    console.log("text being analyzed: [" + text[i] + "]");
    if (text[i] !== ' ' && isword(text[i])) {
      console.log("counted word");
      wordcount++;
    }
  }
  count.innerText = "the word count is: " + wordcount;
  // console.log("word count is: " + wordcount);
}
function isword(str) {
  var alphaNumericFound = false;
  var i = 0;
  while (i < str.length) {
    var code = str.charCodeAt(i);
    if ( /*(code <= 34 && code >= 33) ||*/
         (code >= 97 && code <= 122) ||
         (code >= 65 && code <= 90)){
      alphaNumericFound = true;
      console.log("alphanumeric true!");
      currchar.style.color = "green";
    } else {
      currchar.style.color = "red";
    }
    currchar.innerText = str[i];
    charnum.innerText = code;
    console.log("char is: " + code);
    i++;
  }
  return alphaNumericFound;
}