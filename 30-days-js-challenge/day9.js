//Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements

// Select an HTML element by its ID and Change its text content.
const mainContent = document.getElementById("main_content");
mainContent.textContent = "This is the changed text for div";

// Select an HTML element by its class and change its background color.

const subContent = document.querySelector(".sub_content");
subContent.style.backgroundColor = "lightblue";

// Activity 2: Creating and Appending Elements

// Create a div element with some text content and append it to body
const body = document.body;
const newDiv = document.createElement("div");
newDiv.textContent = "New Content added";

body.appendChild(newDiv); // adds at the end of that element

// Insert the new div at the beginning of the body
// body.insertBefore(newDiv, body.firstChild);

// Create a new li element and add it to an existing ul list
const namesList = document.getElementById("names");
const newLi = document.createElement("li");
newLi.textContent = "New Name";
namesList.appendChild(newLi);

// Activity 3: Removing Elements

// Select an HTML element and remove it from the DOM.
newDiv.remove();

// Remove the last child of a specific HTML element
const lastChild = namesList.lastChild;
namesList.removeChild(lastChild);

//can also use ul:last-child (:nth-child(n)) to get the last element and remove it using remove()

// Activity 4: Modifying Attributes and Classes

// Select an HTML element and change one of its attributes (e.g., src of an img tag)
const image = document.querySelector("img");
const changeImage = document.querySelector(".change_image");
changeImage.addEventListener("click", (e) => {
    image.src =
        "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg";
    image.alt = "night";
});

// M2.
// getAttribute('src')
// image.setAttribute('src', 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg');

// Add and remove a CSS class to/from an HTML element
const toggleDarkMode = document.querySelector(".toggle_dark_mode");
toggleDarkMode.addEventListener("click", (e) => {
    if (!body.classList.contains("dark")) {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
});

// Activity 5: Event Handling

// Add a click even listener to a button that changes the text content of a paragraph
const para = document.querySelector("p");
const changeContent = document.querySelector(".change_content");

changeContent.addEventListener("click", (e) => {
    para.textContent = "This is the changed content, and my name is John";
});

// Add a mouseover event Listener to an element that changes its border color
const addBorder = function (e) {
    namesList.style.border = "2px solid black";
};
namesList.addEventListener("mouseover", addBorder);

// Feature 1: Write a script that selects an HTML element by its ID and changes its text content.

// see Activity 1 - Select an HTML element by its ID and Change its text content.

// Feature 2: Create a script that demonstrates creating a new div element and appending it to the body

// see Activity 2 - Create a div element with some text content and append it to body

// Feature 3: Write a script that selects an HTML element and removes it from DOM.

// see Activity 3 - Select an HTML element and remove it from the DOM.

// Feature 4: Create a script that changes the attributes of an an HTML element.

// see Activity 4 - Select an HTML element and change one of its attributes (e.g., src of an img tag)

// Feature 5: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

// see Activity 5

// Extra 1. Using cheerio/ jsdom npm package to manipulate html in node

// const cheerio = require("cheerio");

// // Create a basic HTML structure
// const $ = cheerio.load("<html><head></head><body></body></html>");

// // Create a new element
// const newElement = $(
//     '<div id="new-element">Hello, this is a new element!</div>'
// );

// // Append the new element to the body
// $("body").append(newElement);

// // Print the updated HTML
// console.log($.html());

// Extra 2. CSS child selectors

// :last-child: Selects the last child of its parent.
// :nth-child(n): Selects the nth child of its parent.
// :nth-last-child(n): Selects the nth child from the end of its parent.
// :nth-of-type(n): Selects the nth child of its type among its siblings.
// :nth-last-of-type(n): Selects the nth child of its type from the end among its siblings.
// :first-child: Selects the first child of its parent.
// :last-of-type: Selects the last child of its type among its siblings.
// :nth-child(odd): Selects elements at odd positions among their siblings.
// :nth-child(even): Selects elements at even positions among their siblings.

// Extra 3. Learn more about the DOM manipulation and also animation, translation
