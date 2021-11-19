/* Generates a menu for any page with an html element with
   id="menu".
                                              */

/* Listens for when the structure of the page is loaded,
   then executes the function                              */
document.addEventListener('DOMContentLoaded', function() {
//Creates anchor elements that will make up the menu
  var homenode = document.createElement('a');
  var aboutnode = document.createElement('a');
  var blognode = document.createElement('a');
  var faqnode = document.createElement('a');

//Sets href attributes to the appropriate url
  homenode.href = "https://kimnd.github.io/";
  aboutnode.href = "https://kimnd.github.io/about.html";
  blognode.href = "https://kimnd.github.io/writing.html";
  faqnode.href = "https://kimnd.github.io/faq.html";
//Creates text nodes so that the links have, yknow, text
  var hometext = document.createTextNode("Home");
  var abouttext = document.createTextNode("About");
  var blogtext = document.createTextNode("Writing");
  var faqtext = document.createTextNode("FAQ");

//Attatches text nodes to corresponding anchor nodes
  homenode.appendChild(hometext);
  aboutnode.appendChild(abouttext);
  blognode.appendChild(blogtext);
  faqnode.appendChild(faqtext);

//Attatches our link nodes to the menu element in the page
  document.getElementById("menu").appendChild(homenode);
  document.getElementById("menu").appendChild(aboutnode);
  document.getElementById("menu").appendChild(blognode);
  document.getElementById("menu").appendChild(faqnode);
});