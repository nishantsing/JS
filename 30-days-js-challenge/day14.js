// Day 14. Classes

// A1. Class Definition

// Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    // updateAge(newAge) {
    //     this.age = newAge;
    //     console.log(`Updated age: ${this.age}`);
    // }

    // Static method
    // static getGenericGreeting() {
    //     return "Hello, welcome!";
    // }

    // Getter for the full name
    get fullName() {
        return `${this.name}`;
    }

    set newName(newName) {
        this.name = newName;
        return `${this.name}`;
    }
}

const person = new Person("John", 24);
console.log(person.getGreetings());

// M2. constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.getGreeting = function () {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// };
// Add a static method to the constructor function
// Person.getGenericGreeting = function() {
//     return 'Hello, welcome!';
// };
// Add a getter for fullName to the Person prototype
// Object.defineProperty(Person.prototype, 'fullName', {
//   get: function() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//  set: function(newFullName) {
//     const [newFirstName, newLastName] = newFullName.split(' ');
//     this.firstName = newFirstName || '';  // Handle cases where firstName might be missing
//     this.lastName = newLastName || '';    // Handle cases where lastName might be missing
//   }
// });
// const person1 = new Person("Alice", 30);
// console.log(person.getGreeting());

// Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.updateAge = function (newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
};
person.updateAge(31);

// A2. Class Inheritance

// Define a class Student that extends the Person class. Add a property studentId and a method to return studentID. Create an instance of the Student class and log the studentID.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;

        // Increment the static property to keep track of the number of students
        Student.totalStudents += 1;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    // Static property
    static totalStudents = 0;
}

// M2. extending without using extends key word
/*
function Student(name, age, studentId) {
    // Call the Person constructor
    Person.call(this, name, age);
    this.studentId = studentId;

    // Increment the static property to keep track of the number of students
    Student.totalStudents += 1;
}

// Inherit the prototype methods from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
*/
const student = new Student("Alice", 30, "S12345");
console.log(student.getGreetings());
console.log(student.getStudentId());

// Override the greeting method in the Student class to include the studentID in the message. Log the overridden greeting message.
Student.prototype.getGreetings = function () {
    return `overriden Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
};
console.log(student.getGreetings());

// A3. Static Methods and Properties

// Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

// Static methods are not added to a class via its prototype in JavaScript. Instead, static methods are properties of the class itself, not instances of the class.
// Static method
Person.getGenericGreeting = function () {
    return "Hello, welcome!";
};
console.log(Person.getGenericGreeting());

// Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
const student2 = new Student("James", 26, "S123");
console.log(Student.totalStudents);

// A4. Getters and Setters

//  Add a getter method to the Person class to return the full name(assume a firstName and lastName property). Create an instance and log the full name using the getter.
console.log(person.fullName);

// Add a setter method to the Person class to update the name properties(firstName and lastName). Update the name using the setter and log the updated full name.
console.log((person.newName = "Rakesh"));

// A5. Private Fields(Optional)

// Define a class Account with the private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be udated therough these methods.
class Account {
    // Define private field for balance
    #balance;

    // Constructor to initialize the balance
    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }
        this.#balance += amount;
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds.");
        }
        this.#balance -= amount;
    }

    // Method to check balance
    getBalance() {
        return this.#balance;
    }
}

// Create an instance of the Account class and test the deposit and withdraw methods. logging the balance after each operation.
const account = new Account(1000);

console.log(`Initial balance: $${account.getBalance()}`); // Output: Initial balance: $1000

account.deposit(500);
console.log(`Balance after deposit: $${account.getBalance()}`); // Output: Balance after deposit: $1500

account.withdraw(200);
console.log(`Balance after withdrawal: $${account.getBalance()}`);

// F1. Write a script that defines a Person class with properties and methods, creates instances, and logs messages.

// F2. Create a script that defines a Student class extending Person, overrides methods, and logss the results.

// F3. Write a script that demonstrates static methods and properties in classes.

// F4. Create a script that uses getters and setters in a class.

// F5. Write a script that defines a class with private fields and methods to manipulate these fields(Optional).
