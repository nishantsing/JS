//Day 8: ES6+ Features

// Activity 1: Template Literals

// use template literals to create a string that includes variables for a person's name and age
const name = "John";
const age = 25;
const str1 = `My name is ${name} and age is ${age}`;
console.log(str1);

// Create a multi line string using template literal
// instead using \n you can add actual new line.

const str2 = `My name is ${name}.
Age is ${age}.
Play football.`;
console.log(str2);
//M2.
// const str2 = `My name is ${name}.\nAge is ${age}.\nPlay football.`;

// Activity 2: Destructuring

// use array destructuring to extract the first and second elements from an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];
const [first, second] = numbers;
console.log(first, second);

// use object destructuring to extract the title and author from a book object
const book = {
    title: "Ta Da Da",
    author: "My ma",
    issued: true,
    inventory: 5,
};

const { title, author } = book;
console.log(title, author);

// aliases while destructuring object
// const { title: bookTitle, author } = book;

// Activity 3: Spread and Rest Operators

// use spread operator to create a new array that includes all elements of an existing array plus additional elements
const newNumbers = [...numbers, 7, 8, 9, 10];
console.log(newNumbers);

// use rest operator in a fn to accept an arbitary numbers of arguments, sum them and return the reult.

const addition = (...args) => {
    let sum = 0;
    args.forEach((arg) => (sum += arg));
    return sum;
};

console.log(addition(1, 2));
console.log(addition(1, 2, 3, 4));

// Activity 4: Default Parameters

// fn product of 2 nums, with second num havinf default value of 1
const product = (num1, num2 = 1) => {
    return `The prodcut of ${num1} and ${num2} of ${num1 * num2}`;
};
console.log(product(2, 3));
console.log(product(5));

// Activity 5: Enhanced Object Literals

// Create an object with computed property names based on variables
// Use Enhanced object literals to create an object with methods and properties
const personName = "Alice";
const personAge = 30;
const celebrateBirthday = function () {
    this.personAge++;
    return `Happy Birthday! You are now ${this.personAge} years old.`;
};

const person = {
    // Shorthand property names
    personName, // Equivalent to name:name
    personAge,

    // Method definitions, without function keywords
    greet() {
        return `Hello, my name is ${this.personName}.`;
    },

    // Computed property names
    ["ageIn" + 10 + "Years"]: personAge + 10,

    // Concise method
    celebrateBirthday,
};

console.log(person.personName); // Output: Alice
console.log(person.personAge); // Output: 30
console.log(person.greet()); // Output: Hello, my name is Alice.
console.log(person.ageIn10Years); // Output: 40
console.log(person.celebrateBirthday()); // Output: Happy Birthday! You are now 31 years old.
console.log(person.personAge); // Output: 31

// Feature 1: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.

// Feature 2: Create a script that uses array and object destructuring to extract values

// Feature 3: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments

// Feature 4: Create a script that defines a function with default paramters and logs the results of calling it with the different arguments.

// Feature 5: Write a script that uses enhanced object literals to create and log an object with methods and computed property names

// Extra 1. Nullish coalescing operator (??) - null/ undefined not for false
let something = null;
console.log(something ?? "if undefined print this");

// Extra 2. Optional chaining (?.)

console.log(book?.author);
console.log(book?.person?.age); // Wont throw error even if we are trying to access age of undefined will throw undefined
console.log(book?.person?.age ?? "No person exists");
