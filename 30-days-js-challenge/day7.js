//Day 7: Objects

// Activity 1: Object Creation and Access

// object book and log to console
const book1 = {
    title: "Harry potter",
    author: "JK Rowling",
    year: 2001,
};

console.log(book1);

//M2. Using the Object Constructor
// const book1 = new Object();
// obj.title = "Harry potter";
// obj.author = "JK Rowling";

//M3. Constructor fn
// function Book(title, author) {
//     this.title = title;
//     this.author = author;
// }
// const book3 = new Book("Harry potter", "JK Rowling");

//M4. Using Class syntax
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
// }
// const book4 = new Book("Harry potter", "JK Rowling");

//M5.
// const entries = [
//     ["title", "Harry potter"],
//     ["author", "JK Rowling"],
// ];
// const book5 = Object.fromEntries(entries);

// Access and log the title and author property of book object

console.log(`title: ${book1.title}, author: ${book1.author}`);

// M2.
// console.log(`title: ${book["title"]}, author: ${book["author"]}`);

// Activity 2: Object Methods

// add method to book object

book1.getDetails = function () {
    return `getDetails : title: ${this.title}, author: ${this.author}`;
};

//M2.
// const book = {
//     title: "Harry potter",
//     author: "JK Rowling",
//     year: 2001,
//     getDetails: function(){
//         return `getDetails : title: ${this.title}, author: ${this.author}`;
//     }
// };

// Note: Dont use arrow fn otherwise it wont have the this scope of object

console.log(book1.getDetails());

//  Adding a method to book object and updates books year property
book1.updateYear = function (year) {
    this.year = year;
};

book1.updateYear(2003);

console.log(book1);

// Activity 3: Nested Objects

// Create a nested object library with properties name and books (an array of book objects)

const library = {
    name: "Jacob's Library",
    books: [
        book1,
        {
            title: "Harry potter and deathly hollows",
            author: "JK Rowling",
            year: 2009,
        },
        {
            title: "The world",
            author: "Charles Dickens",
            year: 2002,
        },
    ],
};
console.log(library);

// Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
library.books.forEach((book) => console.log(book.title));

// Activity 4: The this Keyword

// use this keyword
book1.getTitleYear = function () {
    return `${this.title} was published in the year ${this.year}`;
};
console.log(book1.getTitleYear());

// Activity 5: Object Iteration

//Note: In js object is not iterable

// for...in loop to iterate over keys of object
for (let book in book1) {
    console.log(`key: ${book}, value: ${book1[book]}`);
}

// Using Object.keys and Object.values to log all the keys and values of the book object
console.log("book1 keys: ");
console.log(Object.keys(book1)); // returns array

console.log("book1 values: ");
console.log(Object.values(book1));

// Feature 1: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

// Feature 2: Create a script that defines a library object containing an array of book objects and logs the library details.

// Feature 3: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/ Object.values

// Extra 1. Getter for objects in js (using get keyword, there is also set as well)

// The get keyword will bind an object property to a function. When this property is looked up now the getter function is called. The return value of the getter function then determines which property is returned.

const book2 = {
    title: "Atomic habits",
    dayIssued: new Date("2024-07-17"),
    get daysEllapsed() {
        //getter
        return Math.floor(
            (Date.now() - this.dayIssued) / (1000 * 60 * 60 * 24)
        );
    },
};

console.log(book2.daysEllapsed); // dont call it as a function

// Extra 2. this not accessible in arrow fns
const book3 = {
    title: "something",
    getTitle: () => {
        return `Title of this book is: ${this.title}`;
    },
};
console.log(book3.getTitle()); // undefined as this is not accessible
