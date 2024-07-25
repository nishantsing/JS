// Day 13. Modules

// A1. Creating and Exporting Modules

// Create a module that exports a fn to add two numbers. Import and use this module in another script.
const add = (num1, num2) => {
    return num1 + num2;
};

// Create a module that exports an object representing a person with properties and methods. Import and use this module in another script

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    getfullName: function () {
        return this.firstName + " " + this.lastName;
    },
    getDescription: function () {
        return `My name is ${this.getfullName()} and age is ${this.age}`;
    },
};

module.exports = {
    add,
    person,
};

// A2. see named-imports-es6 day13 file

// A3. see named-imports-es6 day13Utils file

// A4. see named-imports-es6 day13 file

// A5. see named-imports-es6 day13 file

// F1. Write a script that creates a mdule exporting a fn and imports it in another script.

// F2. Create a script demonstrating both named and default exports and their usage.

// F3. Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.

// F4. Create a script demonstrating how to bundle js files using a module bundler(optional)
