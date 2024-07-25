// A2. Named and Default Exports

// Create a module that exports multiple functions using named exports. Import and use these functions in another script.
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Create a module that exports a single fn using default export. Import and use this function in another script.
export default function greet(name) {
    return `Hello, ${name}!`;
}

// A4. Using Third-Party Modules

// Install a third party module(e.g., lodash) using npm. Import and use a fn from its module in a script.

// In terminal type "npm i lodash", you can see it in dependencies of package.json -D flag in command installs as dev dependency.

//Commonjs syntax
// const _ = require("lodash");
// const text = "hello world";
// const capitalizedText = _.capitalize(text);
// console.log(capitalizedText);

//Es6 import
import _ from "lodash";
const text = "hello world";
const capitalizedText = _.capitalize(text);
console.log(capitalizedText);

// Install a third party module(e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from "axios";

// Make a GET request to a public API
async function fetchData() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();


// A5. Use a module bundler like Webpack or Parcel to bundle multiple JS files into a single file. write a script to demonstrate the bundling process

// npm install --save-dev webpack webpack-cli
