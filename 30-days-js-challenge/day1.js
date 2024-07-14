// Day 1: Variable and Data Types
// A1: Variable Declaration
var num1 = 1;
console.log(num1);

let name = "John";
console.log(name);

// A2: Constant Declaration
const isValid = true;
console.log(isValid);

// A3: Data Types
let num2 = 2;
let surName = "Doe";
let isEmail = false;
let person = {
    name: "john doe",
    age: 25,
};
let colors = ["orange", "red", "blue", "red"];

console.log("Type of number:", typeof num2);
console.log("Type of string:", typeof surName);
console.log("Type of boolean:", typeof isEmail);
console.log("Type of object:", typeof person);
console.log("Type of array:", typeof colors);

// A4: Reassigning Variables

let reassignNum = 2;
console.log(reassignNum);
reassignNum = 10;
console.log(reassignNum);

// A5: Understanding const

const age = 26;
//age =27 //TypeError: Assignment to constant variable.

// Feature 1:  write a js script that declares variables of different data types and logs both the value and type of each variable to the console.
// Declare variables of different data types
let numberVar = 42; // Number
let stringVar = "Hello, world!"; // String
let booleanVar = true; // Boolean
let nullVar = null; // Null
let undefinedVar; // Undefined
let objectVar = {
    // Object
    name: "John",
    age: 25,
};
let arrayVar = [1, 2, 3, 4, 5]; // Array (which is an object)
let functionVar = function () {
    // Function
    return "I'm a function!";
};
let symbolVar = Symbol("symbol"); // Symbol
let bigintVar = 12345678901234567890n; // BigInt

// Function to log the value and type of a variable
function logValueType(variable, variableName) {
    let value;
    if (typeof variable === "symbol") {
        value = variable.toString();
    } else {
        value = variable;
    }
    console.log(`${variableName}: Value = ${value}, Type = ${typeof variable}`);
}

// Log the value and type of each variable
logValueType(numberVar, "numberVar");
logValueType(stringVar, "stringVar");
logValueType(booleanVar, "booleanVar");
logValueType(nullVar, "nullVar");
logValueType(undefinedVar, "undefinedVar");
logValueType(objectVar, "objectVar");
logValueType(arrayVar, "arrayVar");
logValueType(functionVar, "functionVar");
logValueType(symbolVar, "symbolVar");
logValueType(bigintVar, "bigintVar");

// Feature 2: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment
// Using let
let variableLet = "Initial value with let";
console.log("Before reassignment (let):", variableLet);

variableLet = "Reassigned value with let";
console.log("After reassignment (let):", variableLet);

// Using const
const variableConst = "Initial value with const";
console.log("Before reassignment (const):", variableConst);

try {
    variableConst = "Reassigned value with const"; // This will throw an error
} catch (error) {
    console.log("Error during reassignment (const):", error.message);
}
