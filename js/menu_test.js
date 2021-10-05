//A file to test making a menu in Javascript instead of copy-
// pasting each time
document.addEventListener('DOMContentLoaded', function() {
  var paragraphnode = document.createElement('p');
  var helloworldnode = document.createTextNode("sup world");
//  paragraphnode.textcontent = ;
  paragraphnode.appendChild(helloworldnode);
//  document.body.appendChild(paragraphnode);
  document.getElementById("menuelement").appendChild(paragraphnode);
});

console.log("you said: " + paragraphnode + ".");