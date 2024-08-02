// Day 20. Local Storage abd Session Storage
// Not something to node use script file

// A1. Understanding LocalStorage

// Write a script to save a string value to local storage and retrieve it. Log the retrieved value.
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(
        `Value "${value}" has been saved to local storage with key "${key}".`
    );
}

// Function to retrieve a string value from local storage
function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    if (value !== null) {
        console.log(
            `Retrieved value from local storage with key "${key}": "${value}"`
        );
    } else {
        console.log(`No value found in local storage with key "${key}".`);
    }
}

// Example usage
const key = "myKey";
const value = "Hello, World!";

// Save the value to local storage
saveToLocalStorage(key, value);

// Retrieve the value from local storage
getFromLocalStorage(key);

// Write a script to save an object to localStorage by converting it to a JSON String. Retrieve and parse the object, lhen log it.
function saveObjectToLocalStorage(key, obj) {
    const jsonString = JSON.stringify(obj); // Convert the object to a JSON string
    localStorage.setItem(key, jsonString); // Save the JSON string to local storage
    console.log(`Object has been saved to local storage with key "${key}".`);
}

// Function to retrieve and parse an object from local storage
function getObjectFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key); // Retrieve the JSON string from local storage

    if (jsonString) {
        try {
            const obj = JSON.parse(jsonString); // Parse the JSON string into an object
            console.log(
                `Retrieved object from local storage with key "${key}":`,
                obj
            );
        } catch (e) {
            console.error("Error parsing JSON string from local storage:", e);
        }
    } else {
        console.log(`No value found in local storage with key "${key}".`);
    }
}

// Example usage
const key1 = "myObjectKey";
const myObject = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
};

// Save the object to local storage
saveObjectToLocalStorage(key1, myObject);

// Retrieve and log the object from local storage
getObjectFromLocalStorage(key1);

// A2. Using LocalStorage

// Create a simple form that saves user input(e.g., nameand email) to localStorage when submitted. Retrieve and display the saved data on page load.

// Function to save user data to localStorage
function saveUserData(name, email) {
    const userData = { name, email };
    localStorage.setItem("userData", JSON.stringify(userData));
}

// Function to retrieve user data from localStorage and display it
function displaySavedData() {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
        const { name, email } = JSON.parse(savedData);
        document.getElementById("displayName").textContent = `Name: ${name}`;
        document.getElementById("displayEmail").textContent = `Email: ${email}`;
    } else {
        document.getElementById("displayName").textContent =
            "Name: No data found";
        document.getElementById("displayEmail").textContent =
            "Email: No data found";
    }
}

// Event listener for form submission
document
    .getElementById("userForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        saveUserData(name, email);
        displaySavedData(); // Display the saved data immediately after saving
    });

// Display saved data when the page loads
window.addEventListener("load", displaySavedData);

// Write a script to remove an item form localStorage. Log the localStorage content before and after removal.

function removeItemFromLocalStorage(key) {
    console.log(`Removing item with key: "${key}"`);
    logLocalStorage(); // Log localStorage content before removal
    localStorage.removeItem(key);
    logLocalStorage(); // Log localStorage content after removal
}

// Function to log all localStorage content
function logLocalStorage() {
    console.log("LocalStorage Content:");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }
}

document.getElementById("removeButton").addEventListener("click", function () {
    removeItemFromLocalStorage("userData"); // Remove 'item2' as an example
});

// A3. Understanding SessionStorage

// Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

// Function to save a string value to simulated sessionStorage
function saveToSessionStorage(key, value) {
    sessionStorage[key] = value;
    console.log(
        `Value "${value}" has been saved to simulated sessionStorage with key "${key}".`
    );
}

// Function to retrieve a string value from simulated sessionStorage
function retrieveFromSessionStorage(key) {
    const value = sessionStorage[key];
    if (value !== undefined) {
        console.log(
            `Retrieved value from simulated sessionStorage with key "${key}": "${value}"`
        );
    } else {
        console.log(
            `No value found in simulated sessionStorage with key "${key}".`
        );
    }
}

// Example usage
const key2 = "exampleKey";
const value2 = "Hello, Simulated Session Storage!";

// Save the value
saveToSessionStorage(key2, value2);

// Retrieve the value
retrieveFromSessionStorage(key2);

// Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then lo it.
function saveObjectToSessionStorage(key, obj) {
    const jsonString = JSON.stringify(obj); // Convert object to JSON string
    sessionStorage.setItem(key, jsonString); // Save JSON string to sessionStorage
    console.log(`Object has been saved to sessionStorage with key "${key}".`);
}

// Function to retrieve and parse an object from sessionStorage
function retrieveObjectFromSessionStorage(key) {
    const jsonString = sessionStorage.getItem(key); // Retrieve JSON string from sessionStorage
    if (jsonString) {
        try {
            const obj = JSON.parse(jsonString); // Parse JSON string back into an object
            console.log(
                `Retrieved object from sessionStorage with key "${key}":`,
                obj
            );
        } catch (e) {
            console.error("Error parsing JSON string from sessionStorage:", e);
        }
    } else {
        console.log(`No value found in sessionStorage with key "${key}".`);
    }
}

// Example usage
const key4 = "exampleObject";
const myObject2 = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
};

// Save the object to sessionStorage
saveObjectToSessionStorage(key4, myObject2);

// Retrieve and log the object from sessionStorage
retrieveObjectFromSessionStorage(key4);

// A4. Using SessionStorage

// Create a simple form that saves user input(e.g., nameand email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

// same as local storage A2.
// localStorage/sessionStorage
// .setItem(key, value) // value should be string
// .getItem(key); // returns string
// .removeItem(key)
// .clear()

// Write a script to remove an item form sessionStorage. Log the sessionStorage content before and after removal.

// A5. Comparing LocalStorage and SessionStorage

// Write a fn that accepts a key and value, and save the value to both localStorage abd sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
    // Save to localStorage
    localStorage.setItem(key, value);
    console.log(
        `Value "${value}" has been saved to localStorage with key "${key}".`
    );

    // Save to sessionStorage
    sessionStorage.setItem(key, value);
    console.log(
        `Value "${value}" has been saved to sessionStorage with key "${key}".`
    );

    // Retrieve and log the values from both storages
    retrieveAndLogValues(key);
}

// Function to retrieve and log values from both localStorage and sessionStorage
function retrieveAndLogValues(key) {
    // Retrieve from localStorage
    const localStorageValue = localStorage.getItem(key);
    console.log(
        `Retrieved value from localStorage with key "${key}": "${localStorageValue}"`
    );

    // Retrieve from sessionStorage
    const sessionStorageValue = sessionStorage.getItem(key);
    console.log(
        `Retrieved value from sessionStorage with key "${key}": "${sessionStorageValue}"`
    );

    // Display the values on the webpage
    document.getElementById("output").textContent =
        `localStorage value: ${localStorageValue} \n` +
        `sessionStorage value: ${sessionStorageValue}`;
}

// Example usage
const key3 = "exampleKey";
const value3 = "Hello, Storage!";

// Event listener for button click to save and retrieve values
document.getElementById("saveButton").addEventListener("click", function () {
    saveToBothStorages(key3, value3);
});

// Write a fn that clears all data from both localStorage and sessionStorage. Verify that both storages are empty

function clearAllStorages() {
    // Clear localStorage
    localStorage.clear();
    console.log("localStorage has been cleared.");

    // Clear sessionStorage
    sessionStorage.clear();
    console.log("sessionStorage has been cleared.");

    // Verify and log that both storages are empty
    verifyStorage();
}

// Function to verify that both localStorage and sessionStorage are empty
function verifyStorage() {
    const localStorageEmpty = localStorage.length === 0;
    const sessionStorageEmpty = sessionStorage.length === 0;

    document.getElementById(
        "localStorageStatus"
    ).textContent = `localStorage is ${
        localStorageEmpty ? "empty" : "not empty"
    }.`;
    document.getElementById(
        "sessionStorageStatus"
    ).textContent = `sessionStorage is ${
        sessionStorageEmpty ? "empty" : "not empty"
    }.`;

    console.log(
        `localStorage is ${localStorageEmpty ? "empty" : "not empty"}.`
    );
    console.log(
        `sessionStorage is ${sessionStorageEmpty ? "empty" : "not empty"}.`
    );
}

// Event listener for button click to clear storage
document.getElementById("clearButton").addEventListener("click", function () {
    clearAllStorages();
});

// F1. Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.

// F2. Write a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.

// F3. Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the result.

// F4. Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.

// Extras IndexedDB, cookies
