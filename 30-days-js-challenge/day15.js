// Day15. Closures

// A1. Understanding Closures

// Write a fn that returns another fn, where the inner fn accesses a variable from the outer function's scope. Call the inner fn and log the result.

// A2. T4. Create a closure that captures a user's name and returns a fn that greets the user by name.
const greetName = (name) => {
    const greet = "Hello! ";
    function greetting() {
        return greet + name;
    }
    return greetting;
};

const greet = greetName("John");
console.log(greet());

// Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let counter = 0; // Private variable

    return {
        increment: function () {
            counter++;
        },
        getValue: function () {
            return counter;
        },
    };
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());

// A2. Practical Closures

// Write a fn that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIdGenerator() {
    let lastId = 0; // Private variable to keep track of the last generated ID

    return function () {
        lastId++; // Increment the last generated ID
        return lastId; // Return the new unique ID
    };
}

// Create an ID generator instance
const generateId = createIdGenerator();

// Generate some unique IDs
console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2
console.log(generateId()); // Output: 3

// A3. Closure in Loops

// Write a loop that creates an array of fns. Each fn should log its index when called. Use a closure to ensure each fn logs the correct index.
const functions = [];

for (let i = 0; i < 5; i++) {
    functions[i] = (function (index) {
        return function () {
            console.log(index);
        };
    })(i);
}

// Call each function to log its index
for (let j = 0; j < functions.length; j++) {
    functions[j](); // Outputs 0, 1, 2, 3, 4
}

// A4. Module Pattern

// Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const createItemManager = (function () {
    let items = []; // Private variable to store the collection of items

    return {
        addItem: function (item) {
            items.push(item);
            console.log(`${item} has been added.`);
        },
        removeItem: function (item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`${item} has been removed.`);
            } else {
                console.log(`${item} not found in the collection.`);
            }
        },
        listItems: function () {
            console.log("Items in the collection:");
            items.forEach((item, index) => {
                console.log(`${index + 1}: ${item}`);
            });
        },
    };
})();

// const itemManager = createItemManager()
// Example usage
createItemManager.addItem("Apple");
createItemManager.addItem("Banana");
createItemManager.listItems();
createItemManager.removeItem("Apple");
createItemManager.listItems();

// Memorization
// Write a fn that memorizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {}; // Object to store previous computations

    return function (...args) {
        const key = JSON.stringify(args); // Create a unique key based on the arguments
        if (cache[key] !== undefined) {
            console.log("Returning cached result for", args);
            return cache[key];
        } else {
            const result = fn(...args); // Compute the result
            cache[key] = result; // Store the result in the cache
            return result;
        }
    };
}

// Example usage with a function to memoize
function slowFunction(x, y) {
    console.log("Computing result for", x, y);
    return x + y; // Example computation
}

const memoizedSlowFunction = memoize(slowFunction);

// Call the memoized function
console.log(memoizedSlowFunction(3, 4)); // Computes and returns result: 7
console.log(memoizedSlowFunction(3, 4)); // Returns cached result: 7
console.log(memoizedSlowFunction(5, 6)); // Computes and returns result: 11
console.log(memoizedSlowFunction(5, 6)); // Returns cached result: 11

// Create a memorized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const memoizedFactorial = memoize(factorial);

// Example usage
console.log(memoizedFactorial(5)); // Computes and returns result: 120
console.log(memoizedFactorial(5)); // Returns cached result: 120
console.log(memoizedFactorial(6)); // Computes and returns result: 720
console.log(memoizedFactorial(6)); // Returns cached result: 720


// F1. Write a script that demonstrates a basic closure with a fn returning another fn that accesses the outer fn variable.

// F2. Create a script that uses a closure to maintain a private counter with increment and get functions.

// F3. Write a script that generates unique IDs using a closure to keep track of the last generated ID.

// F4. Create a script that demonstrates closures in loop to ensure functions log the correct index.

// F5. Write a script that memorizes the results of a fn and demonstrates it with a factorial calculation.