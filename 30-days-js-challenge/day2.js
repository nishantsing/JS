// Day 2: Operators

// Activity 1: Arithmetic Operations

let sum = (a, b) => {
    console.log(a + b);
};

let substract = (a, b) => {
    console.log(a - b);
};
let multiply = (a, b) => {
    console.log(a * b);
};
let divide = (a, b) => {
    console.log(a / b);
};
let remainder = (a, b) => {
    console.log(a % b);
};

sum(1, 2);
substract(5, 2);
multiply(5, 2);
divide(4, 2);
remainder(5, 2);

// Activity 2: Assignment Operators

let num1 = 5;
console.log((num1 += 2));
console.log((num1 -= 2));

// Activity 3: Comparison Operators

let comparison = (a, b) => {
    if (a > b) {
        console.log(`${a} is greater than ${b}`);
    } else if (a < b) {
        console.log(`${a} is less than ${b}`);
    }
};

comparison(2, 3);

let strictComparison = function (a, b) {
    if (a >= b) {
        console.log(`${a} is greater than or equal to ${b}`);
    } else if (a <= b) {
        console.log(`${a} is less than or equal to${b}`);
    }
};

strictComparison(5, 4);

let isEqual = (a, b) => {
    if (a === b) {
        console.log(`The numbers are strictly equal`);
    } else if (a == b) {
        console.log(`The numbers are equal but not strictly`);
    }
};

isEqual(5, "5");

// Activity 4: Logical Operators

const multiple5Check = (num) => {
    num % 5 == 0 && console.log(num);
};
multiple5Check(10);

const isFizzBuzz = (num) => {
    if (num % 3 === 0 || num % 5 === 0) {
        console.log(`Fizz Buzz`);
    }
};
isFizzBuzz(15);
const logout = (loggedIn) => {
    if (loggedIn) {
        loggedIn = !loggedIn;
    }
};

logout(true);
// Activity 5: Ternary Operator

let checkType = function (num) {
    num >= 0
        ? console.log(`Number is positive`)
        : console.log(`Number is negative`);
};

checkType(2);
checkType(-5);

// Feature 1:
