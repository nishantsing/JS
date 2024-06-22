// CONST & LET 
var name = 'John'; //before ES6

const names = 'John';
names = 'Jessy'; // error

let namess = 'Nishant'

const person = {
    name: 'John',
    age: 34
}

person.name = 'Jack'; // This works even if the perosn object is const
console.log(person);

person = {
    name: 'Jack'
} // Error

const nums = [1, 2, 3, 4]
nums.push(5); // This also works fine.
console.log(nums);
//Mostly use const unless you are going to re initialize the variable.




// ARROW FUNCTIONS

function sayHello() {
    console.log("Hello");
}

sayHello();

const sayHellos = () => {
    console.log('Hello');
}

// const sayHellos = (name) => console.log('Hello' + name);

// const sayHellos = name => console.log(`Hello ${name}`);

sayHellos();




// High Order Array Methods 

const fruits = ['apples', 'oranges', 'grapes'];

// 1. FOREACH

// fruits.forEach(function(){})

fruits.forEach((fruit, index) => {
    console.log(fruit);
})

// 2. MAP

const singleFruit = fruits.map((fruit) => { fruit.slice(0, -1) })

// 3. FILTER

const people = [
    { id: 1, name: 'Karen' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Sharon' }
];

// In react state is immutable, so using filter we are returning new array with ammends.
const people2 = people.filter((person) => person.id !== 2);



// SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4]; //array concatenation
const arr3 = [arr, 4]; //array inside array

const person = {
    name: 'Nishant',
    age: 36
}

const newPerson = {
    ...person,
    email: 'nsnishant51@gmail.com'
}// Create new object with some new properties from old object. 

//we can use combination of spread operator and filter

const arr4 = [...arr.filter(num => num !== 2)];


//DESTRUCTURING

// pull values out of objects and arrays 

const profile = {
    name: 'John Doe',
    address: {
        street: '40 Main st',
        city: 'Boston'
    },
    hobbies: ['movies', 'music']
}

console.log(profile.name);

const { name } = profile;
const { name, address, hobbies } = profile;

console.log(name, address.street, hobbies[0]);

const { street, city } = profile.address;

console.log(street, city);

// CLASSES

class Person {
    constructor() {
        console.log('ran');
        this.name = 'John'
    }
}

// Hardcoding name property will assign John for each object created.
const person1 = new Person(); //Instantiation
const person2 = new Person();


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age}`
    }
}

const person1 = new Person('John', 33); //Instantiation
const person2 = new Person('Sara', 28);

console.log(person1.greet());

// SUBCLASSES

class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance;
    }

    info() {
        return `${this.name} owes $${this.balance}.00`;
    }

}

const customer1 = new Customer('Kevin', 32, 300);

console.log(customer1.info());

// MODULES

