// Object property access
// Step 1: Create a prototype object with a function
const proto = {
    greet() {
        console.log("Hello!");
    }
};

// Step 2: Create a new object that inherits from it
const obj = Object.create(proto);

console.log(obj.greet); // ✅ function exists (inherited)
obj.greet();            // "Hello!"

// Step 3: But hasOwnProperty says it's not its own
console.log(obj.hasOwnProperty("greet")); // ❌ false

// If we create an Object from null it will not even have the default Object.prototype which contains (Object.prototype.hasOwnProperty, Object.prototype.toString, Object.prototype.valueOf)
const dict = Object.create(null);
dict.foo = 42;

console.log(dict.hasOwnProperty);           // undefined
console.log(Object.hasOwn(dict, "foo"));    // ✅ true

const obj1 = {
    hasOwnProperty: "not a function",
    name: "Nishant"
};

console.log(obj1.hasOwnProperty("name")); // ❌ TypeError

// Because obj.hasOwnProperty is now a string, not the function from Object.prototype.
Object.prototype.hasOwnProperty.call(obj, "name"); // ✅ true
// or
Object.hasOwn(obj, "name"); // ✅ true


// Why to use new keyword when everything is a function in js

/* When you use new with a function (acting as a constructor), it performs several actions automatically:
It creates a new, empty object.
It sets the prototype of this new object to the prototype of the constructor function, enabling inheritance.
It binds the this keyword within the constructor function to the newly created object. This allows you to assign properties to the specific instance being created (e.g., this.name = name;).
It implicitly returns the newly created object (unless the constructor explicitly returns a different object).
 */
// Using 'new' to create distinct objects
function Person(name) {
    this.name = name;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob

// Calling the function directly (without 'new')
const personWithoutNew = Person("Charlie"); // 'this' might point to global object
console.log(personWithoutNew); // Output: undefined (as Person doesn't explicitly return anything)
// console.log(window.name); // In a browser, this might output 'Charlie'