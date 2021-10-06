/*///////////////////////////////////////////////////////////////////
A file to test making a menu in Javascript instead of copy-
pasting each time.
Sources used:
- How to construct an anchor element in javascript instead of by hand
--- https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/
- How to get an element by tag type instead of just by id
--- https://www.tutsmake.com/javascript-get-element-by-id-name-class-tag-value/
///////////////////////////////////////////////////////////////////*/
/*This event listener fires when the structure of the HTML page has
been loaded. It then creates a simple 'hello world' message in a <p>
tag and adds the tag to an element with the id of "target".*/

document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////
  var navnode = document.createElement('nav');
  var homeanchornode = document.createElement('a'); 
  var homelinktext = document.createTextNode("Home");
  homeanchornode.appendChild(homelinktext);
  navnode.appendChild(homeanchornode);

//  anchornode1.title = "clickableLink";
  homeanchornode.href = "https://kimnd.github.io/";
//  homeanchornode.id = "target";

//  document.navnode.appendChild(homeanchornode); //NOTE: doesn't work because 'navenode' isn't recognized--'nav' is also not recognized. gotta go by element type :)

//  document.body.appendChild(homeanchornode); //puts the "home" link button in the body tag

  document.body.appendChild(navnode);

////////////////////////////////////////////
  // document.getElementById("target").appendChild(paragraphnode);

  // console.log("you said: " + paragraphnode.textcontent + ".");
});

/*
document.addEventListner('DOMContentLoaded', function() {
  var navnode = document.createElement('nav');
  var anchornode1 = document.createElement('a');
  var anchornode2 = document.createElement('a');
  var anchornode3 = document.createElement('a');

///Source for this code (wording changed a bit for my own purposes):
///https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/
// Create anchor element.
  var a = document.createElement('a'); 

// Create the text node for anchor element.
  var link = document.createTextNode("This is what the link will say");
    
// Append the text node to anchor element.
  a.appendChild(link); 
    
// Set the title.
  a.title = "This defines the link's 'title' property"; 

// Set the link's destination
  a.href = "https://www.geeksforgeeks.org"; 

// Append the anchor element to the body.
  document.body.appendChild(a);
});
*/