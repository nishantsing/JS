// Day 12. Error Handling

// A1: Basic Error Handling with Try-Catch

// Write a fn that intentionally throws an error and use a try-catch to handle the error and log an appropriate message to console.

function throwError() {
    throw new Error("This is an error");
}

try {
    throwError();
} catch (error) {
    console.log(error.message); // dont use error otherwise you will see complete call stack
}

// Create a fn that divides two numbers and throws an error if the denominator is zero. Use try-catch block to handle the error.
const divide = (num1, num2) => {
    if (num2 === 0) {
        // If no condition js /0 returns Infinity
        throw new Error("Division by zero is not allowed");
    }
    return num1 / num2;
};

try {
    console.log(divide(2, 0));
} catch (error) {
    console.log(error.message);
}

// A2. Finally Block

// Write a script that includes a try-catch block and finally block. Log message in the try, catch, and finally blocks to observe the execution flow.
function demonstrateTryCatchFinally() {
    try {
        console.log("In the try block");
        // Simulate an error
        throw new Error("This is a simulated error"); // If this line is commented then it will directly go to finally instead of catch
    } catch (error) {
        console.log("In the catch block");
        console.error("Caught an error:", error.message);
    } finally {
        console.log("In the finally block");
    }
}

// Call the function to observe the execution flow
demonstrateTryCatchFinally();

// A3. Custom Error Objects

// Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a fn and handle it using try-catch block.
class CustomError extends Error {
    constructor(message, additionalInfo, statusCode) {
        // super(message)
        super(`${message} - Additional Info: ${additionalInfo}`); // Call the parent class constructor
        this.name = "CustomError"; // Set the error name to 'CustomError'
        this.statusCode = statusCode;
    }
}

function throwCustomError() {
    const errorMessage = "This is a custom error";
    const additionalInfo = "Some additional context or Information";
    throw new CustomError(errorMessage, additionalInfo, 400);
}

try {
    throwCustomError();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a custom error:", error.message);
        console.error("Caught a custom error:", error.statusCode);
    } else {
        console.error("Caught an unexpected error:", error);
    }
}

// Write a fn that validates user input(e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custome error using a try-catch block.
class ValidationError extends Error {
    constructor(message, statusCode) {
        super(message); // Call the parent class constructor
        this.name = "ValidationError"; // Set the error name to 'ValidationError'
        this.statusCode = statusCode; // Set the status code
    }
}

function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty", 400);
    }
    console.log("Input is valid:", input);
}

const userInput = ""; // Example input
try {
    validateInput(userInput);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Caught a validation error:");
        console.error(`Message: ${error.message}`);
        console.error(`Status Code: ${error.statusCode}`);
    } else {
        console.error("Caught an unexpected error:", error);
    }
}

// A4. Error Handling in Promises

// Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() >= 0.5; // 50% chance to resolve or reject
        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully!");
            } else {
                reject(new Error("Promise rejected with an error."));
            }
        }, 1000); // Simulate a delay of 1 second
    });
}

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Caught an error:", error.message);
    });

// Use try-catch within an async fn to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handlePromise() {
    try {
        const message = await randomPromise();
        console.log("async: ", message);
    } catch (error) {
        console.error("Caught an error async:", error.message);
    }
}
handlePromise();
// A5. Graceful Error Handling in fetch

// Use the fetch API to request data from an invalid URL and handle the error using .catch. Log an appropriate error message to the console.
fetch("https://json.typicode.com/tod/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error(
                "Network response was not ok: " + response.statusText
            );
        }
        return response.json();
    })
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((err) =>
        console.log("Error in fetching data using fetch: ", err.message)
    );

// Use the fetch API to request data from an invalid URL within async function and handle the error using try-catch.
const fetchfn = async () => {
    try {
        const res = await fetch("https://json.typicode.com/tod/1");
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error(
            "Error in fetching data using fetch in async: ",
            error.message
        );
    }
};
fetchfn();

// F1. Write a script that demonstrates basic error handling using try-catch and finally blocks.

// F2. Create a script that defines and throws custom errors, handling them with try-catch blocks.

// F3. Write a script that handles errors in promising using .catch() and try-catch within async fns.

// F4. Write a script that handles errors when using the fetch API to request data from invalid URLs.
