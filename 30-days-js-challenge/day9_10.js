//Day 9: DOM Manipulation
//Day 10: Event Handling

// Activity 9_1: Selecting and Manipulating Elements

// Select an HTML element by its ID and Change its text content.
const mainContent = document.getElementById("main_content");
mainContent.textContent = "This is the changed text for div";

// Select an HTML element by its class and change its background color.

const subContent = document.querySelector(".sub_content");
subContent.style.backgroundColor = "lightblue";

// Activity 9_2: Creating and Appending Elements

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

// Activity 10_2: Mouse Events

// Add a mouseover event listener to an element that changes its background color
const colorChanger = document.querySelector(".color_element");
colorChanger.addEventListener("mouseover", () => {
    colorChanger.style.backgroundColor = "red";
});

// Add a mouseout event listener to an element that resets its background color
colorChanger.addEventListener("mouseout", () => {
    colorChanger.style.backgroundColor = "aqua";
});

// Activity 9_3: Removing Elements

// Select an HTML element and remove it from the DOM.
newDiv.remove();

// Remove the last child of a specific HTML element
const lastChild = namesList.lastChild;
namesList.removeChild(lastChild);

//can also use ul:last-child (:nth-child(n)) to get the last element and remove it using remove()

// Activity 10_3: Keyboard Events

// Add a keydown event listener to an input field that logs the key pressed to the console.
const inputField = document.querySelector(".input_field");
inputField.addEventListener("keydown", (e) => {
    console.log(e.key);
});

// Add a keyup event listener to an input field that dispays the current value in a paragraph.
const result = document.querySelector(".result");
inputField.addEventListener("keyup", function (e) {
    result.textContent = this.value; // remember can we use e.target.value
});

// Activity 9_4: Modifying Attributes and Classes

// Select an HTML element and change one of its attributes (e.g., src of an img tag)
const image = document.querySelector("img");
const changeImage = document.querySelector(".change_image");
changeImage.addEventListener("click", (e) => {
    image.src =
        "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg";
    image.alt = "night";
    image.style.display = "block";
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
// Activity 10_4: Form Events

// Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Create a FormData object from the form, you need to give input a name to get FormData
    const formData = new FormData(e.target);
    // Convert the FormData object to a plain object
    const formProps = Object.fromEntries(formData);

    // Log the form data to the console
    console.log(formProps);
});

// Add a change event listener to a select dropdown that displays the selected value in a paragraph
document.getElementById("options").addEventListener("change", function (event) {
    const selectedValue = event.target.value;
    document.getElementById(
        "selectedValue"
    ).textContent = `Selected value: ${selectedValue}`;
});

// Activity 9_5: Event Handling
// Activity 10_1: Basic Event Handling

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

// Add a double click event listener to an image that toggles its visibility
image.addEventListener("dblclick", (e) => {
    image.style.display = "none";
});

// Activity 10_5: Event Delegation

// Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
namesList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});

// Add a event listener to a parent element that listens for events from dynamically added child elements.

// Feature 9_1: Write a script that selects an HTML element by its ID and changes its text content.

// see Activity 9_1 - Select an HTML element by its ID and Change its text content.

// Feature 9_2: Create a script that demonstrates creating a new div element and appending it to the body

// see Activity 9_2 - Create a div element with some text content and append it to body

// Feature 9_3: Write a script that selects an HTML element and removes it from DOM.

// see Activity 9_3 - Select an HTML element and remove it from the DOM.

// Feature 9_4: Create a script that changes the attributes of an an HTML element.

// see Activity 9_4 - Select an HTML element and change one of its attributes (e.g., src of an img tag)

// Feature 9_5: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

// see Activity 9_5

// Feature 10_1: Write a script that adds a click event listener to a button to change the text content of a paragraph.

// see Activity 10_1 - Add a click even listener to a button that changes the text content of a paragraph

// Feature 10_2: Create a script that handles mouseover and mouseout events to change the background color of an element.

// see Activity 10_2

// Feature 10_3: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.

// see Activity 10_3

// Feature 10_4: Create a script that handles form submission and change events on a selecr dropdown.

// see Activity 10_4

// Faeture 10_5: Write a script that demonstrates event delegation by handling events on dynamically added child elements.

// see Activity 10_5

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
