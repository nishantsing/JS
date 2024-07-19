//Day 5: Functions

// Activity 1: Function Declaration

// Function to check if number is even or odd
oddOrEven(5);
function oddOrEven(num) {
    num % 2 === 0 ? console.log("Even") : console.log("Odd");
}

// Function to calculate square of a number
function getSquared(num) {
    return `Square of ${num} is: ${num * num}`;
}

console.log(getSquared(2));

// Activity 2: Function Expression

// Fn to find max of 2 numbers
const max = function (num1, num2) {
    if (num1 === num2) return `Both are equal`;
    if (num1 > num2) {
        return `${num1} is greater`;
    }
    return `${num2} is greater`;
};
console.log(max(2, 6));

// Fn to concate to strings and return the result
const joinStrings = (str1, str2) => {
    return `${str1} ${str2}`;
};
console.log(joinStrings("Hello", "John"));

// Activity 3: Arrow Functions

// Arrow Fn to calculate sum of 2 numbers
const sum = (num1, num2) => {
    return `Sum of ${num1}, ${num2}: ${num1 + num2}`;
};
console.log(sum(2, 7));

// Arrow Fn to check if a string contains specific character
const isInString = (str1, char) => {
    return str1.includes(char);
};
console.log(isInString("John", "j"));

// Activity 4: Fn Parameters and Default Values

// Fn takes 2 numbers and return their product. Provide a default value for the second parameter.
const product = (num1, num2 = 1) => {
    return `The prodcut of ${num1} and ${num2} of ${num1 * num2}`;
};
console.log(product(2, 3));
console.log(product(5));

// Fn that takes name and age returns greeting message. Provide default value for age.

const greetings = (name, age = 1) => {
    console.log(`Hello ${name}, your age is ${age}`);
};

greetings("John", 25);
greetings("Vanessa");

// Fn takes multiple arguments and add them.

const addition = (...args) => {
    let sum = 0;
    args.forEach((arg) => (sum += arg));
    return sum;
};

console.log(addition(1, 2));
console.log(addition(1, 2, 3, 4));

// Activity 5: High-Order Fn

const sayHello = () => {
    console.log(`Hello`);
};
// HOFn takes a fn and a number and calls the fn that many times
const runNTimes = (fn, times) => {
    while (times > 0) {
        fn();
        times--;
    }
};
runNTimes(sayHello, 2);
runNTimes(() => {
    greetings("John", 25);
}, 5);

// HOFn takes 2 fn and a value, applies the first fn the value, and then applies the second fn to the result
const sayHi = () => {
    return "Hi";
};

const setGreetings = (greet, name) => {
    return `${greet} ${name}, `;
};
const longGreetings = (fn1, fn2, value) => {
    let greet = fn1();
    return fn2(greet, value);
};
console.log(longGreetings(sayHi, setGreetings, "John"));

// Feature 1: Write a script that includes a fn to check if a number is even or odd

// see Activity 1 - Function to check if number is even or odd

// Feature 2: Create a script that prints that includes a fn to calculate the square of a number and returns the result.

// see Activity 1 - Function to calculate square of a number

// Feature 3: Write a script that includes a fn expression to concatenate two string

// see Activity 2 - Fn to concate to strings and return the result

// Feature 4: Write a script that includes an arrow fn to calculate the sum of 2 numbers.

// see Activity 3 - Arrow Fn to calculate sum of 2 numbers

// Feature 5: Write a script that includes a HOFn to apply a given fn multiple times

// see Activity 5 - HOFn takes a fn and a number and calls the fn that many times

// Extra 1. Arguments array like object accessible isnide fns except arrow.

function func(a, b, c) {
    console.log(arguments[0]);
}

func(1, 2, 3);

// Extra 2. Rest parameters ...args
