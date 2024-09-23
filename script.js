"use strict";

/*
FEAR NOT THIS PAGE, FOR THE COMMENTS ARE MANY, AND THE CODE IS FEW :)
*/


/*

THIS HUGE COMMENT EXPLAINS HOW THE FUNCTION RIGHT BELOW IT WORKS

document.getElementById("toggle-mode"):

    This part selects the element with the id of "toggle-mode", 
    which is a button in your HTML:

    html

        <button id="toggle-mode">Toggle Day/Night</button>

        So, this targets the button element.

    .addEventListener("click", () => {...}):
        The addEventListener() method attaches an event listener to the "toggle-mode" button. 
        The event listener listens for a "click" event.

        When the button is clicked, the code inside the arrow function (() => {...}) will be executed.
        In this case, the code inside the function toggles the "night" class on the body element.

    document.body.classList.toggle("night"):
        This part targets the body element of the HTML document, which refers to the main container of the web page.
        .classList.toggle("night") is the key function here:
            .classList is a property of DOM elements that represents the list of classes applied to the element.
            In this case, it refers to the classes applied to the <body> tag.

            .toggle("night") is a method that either:
                Adds the "night" class to the body element if it's not already there.
                Removes the "night" class from the body element if it is already there.

What the .toggle() Method Does:

    First Click:
        If the body doesn't have the "night" class, the .toggle() 
        method will add it, switching the webpage to "Night mode."

    Second Click:
        If the body already has the "night" class, the .toggle() 
        method will remove it, switching the webpage back to "Day mode."

This creates a simple on/off toggle effect for switching between two states—day 
and night—by adding or removing the "night" class.


*/

// Toggle between Day and Night modes
document.getElementById("toggle-mode").addEventListener("click", () => {
    document.body.classList.toggle("night");
  });
  

//   ----------------------------------------------------------------------------------------------------------------------
// Keeping track of the trees


/*
let treeCounter = 1;:

    This initializes a variable treeCounter with a value of 1. 
    It's used to keep track of how many trees have been added.
    We use let because the value of treeCounter will change as trees are added.

const bobRossSound = document.getElementById('bob-ross-sound');:

    This selects the audio element in the HTML with the id of 'bob-ross-sound', 
    storing it in the bobRossSound variable.
    This is the audio that will play when a certain number of trees have been added.

*/

let treeCounter = 1;
const bobRossSound = document.getElementById('bob-ross-sound');


// Paint a Happy Little Tree
//----------------------------------------------------------------------------------------------------------------------------------------------
/*
.addEventListener("click", () => {...}):

    This sets up a click event listener for the "paint-tree" button.
     Whenever the button is clicked, the code inside the arrow function will run.

*/
document.getElementById("paint-tree").addEventListener("click", () => {

  //-------------------------------------------------------
  /*
    const tree = document.createElement("div");:

        This creates a new div element and stores it in the variable tree. 
        This will represent a "tree" on the webpage.

    tree.classList.add("tree");:

        This adds the class tree to the new div. This class will define 
        how the tree looks (the styling is likely in your CSS file).
  */
  const tree = document.createElement("div");
  tree.classList.add("tree");

//   ---------------------------------------------------------------------------

  // Create an image element to represent the tree
  const img = document.createElement("img");
  img.src = "tree.png"; // Make sure to replace this with the path to your tree image

  img.style.width = "100%";  // Ensure the image fills the div
  img.style.height = "100%";  // Ensure the image fills the div

  // Add the image to the div
  tree.appendChild(img);

  // Event listener to remove the tree when clicked
  tree.addEventListener("click", () => {
    tree.remove(); // Removes the tree when clicked
  });

  document.getElementById("forest").appendChild(tree);


  if (treeCounter === 10) {
    bobRossSound.play();
    treeCounter = -1;
  }
  treeCounter++;

});

/*
What’s Happening:

    You click the "Paint a Happy Little Tree" button:
        The first event listener is attached to this button.
         When you click it, the code inside this event listener runs.
        This code creates a new tree (a div with a tree image)
         and puts it on the webpage.

    Inside that first event listener:
        After the tree is created, another event listener (the second one) 
        is attached to that specific tree.
        This second event listener listens for when you click on the tree itself,
        and when you do, it removes the tree from the page.

Event Listener Inside an Event Listener:

    First Event Listener (Button Click):
        When you click the "Paint a Happy Little Tree" button, 
        the first event listener runs.

        It creates a tree and adds it to the webpage.

    Second Event Listener (Tree Click):
        After the tree is created, a second event listener is attached to the tree.
        This second event listener waits for you to click on the tree itself.
        When you click on the tree, this second event listener runs and removes the tree.

Why It Works:

    The first event listener runs every time you click the button, creating a new tree 
    and attaching a new event listener to it.

    The second event listener is only for the individual tree that was just created. 
    It waits for you to click on that tree, and when you do, it removes that specific tree.

In other words: When you click the button, it not only creates a tree but also tells the tree, 
"Hey, if someone clicks on you, disappear!"

*/
