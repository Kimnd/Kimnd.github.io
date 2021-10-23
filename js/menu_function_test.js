function makeMenu() {
  console.log("In makeMenu");
  var menunode = document.createElement('nav');

  var menutext = document.createTextNode("this is a menu");

  menunode.appendChild(menutext);

//doesn't work--'this' isn't really a thing for html?
//  this.appendChild(menunode);
  document.getElementById("menu").appendChild(menunode);

}
