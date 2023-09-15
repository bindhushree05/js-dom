// Challenge 1.1: Access the HTML section element with the id "container" using the getElementbyId method and change the background color of it.
var container = document.getElementById("container");
container.style.backgroundColor = "blue";

// Challenge 1.2: Access the div with the id "header" using the querySelector method and change the text content to "These are the DOM Methods".
var header = document.querySelector('#header');
header.textContent = "These are the DOM methods";

// Challenge 1.3: Access all the elements with the class "dom-methods" using the method getElementsByClassName and change the text color to "red". Hint: Use for loop
var elements = document.getElementsByClassName("dom-methods");
for (var x = 0; x < elements.length; x++) {
    elements[x].style.color = "yellow";
}

// Challenge 1.4: Access all the elements with the class "dom-methods" using the method querySelectorAll and change the font size to 20px". Hint: Use for loop
var elements = document.querySelectorAll(".DOM-methods");
for (var x = 0;x<elements.length;x++){
  elements[x].style.fontsize = "35px";
}
// Challenge 2.1: Create a new element <div> and append it to the body tag and append the string "Division" inside the newly created <div> using textContent.
var newdiv = document.createElement("div");
newdiv.textContent = "division";
document.body.appendChild(newdiv);

// Challenge 2.2: Add id "main" using setAttribute method to the newly created <div> element. Print the id "main" using the getAttribute method.
var newdiv = document.createElement("div");
newdiv.textContent = "division";
newdiv.setAttribute("id","main");
document.body.appendChild(newdiv);
var idValue = newdiv.getAttribute("id");
console.log("idValue")

// Challenge 2.3: Add the text content "This is a division" inside the div with id "main" using innerHTML.
var maindiv = document.getElementById("main");
maindiv.innerHTML = "these is the topic to JS-DOM";

// Challenge 2.4: Create a new element <p> and append it to the div with id "main" and append the string "This is a paragraph tag" inside the <p> tag using the innerText.
// Hint: First access the id "main" using document.getElementById and then append the new element <p> tag.
var maindiv = document.getElementById("main");
var newparagraph = document.createElement("P");
newparagraph.innerHTML = "JS DOM REFERS TO DOCUMENT OBJECT MODEL WHICH IS USED FORHTML AND XML DOCUMENTS";
maindiv.appendChild(newparagraph);

// Challenge 2.5: Remove the class "footer" using classList and add the new class "dom-method-footer". If your footer text color changes to aqua blue you are right.
var footerElement = document.querySelector(".footer");
footerElement.classList.remove("footer");
footerElement.classList.add("dom-method-footer");
footerElement.style.color = "brown";

// Challenge 2.6: Set the color of the <p> text as red using DOM manipulation.
var paragraphelement = document.querySelector("P");
paragraphelement.style.color = "blue";

// Challenge 2.7: Remove the div with a class "copyright" using the removeAttribute method.
var copyrightdiv = document.querySelector(".copyright");
if (copyrightdiv){
  copyrightdiv.parentNode.removeChild(copyrightdiv);
}