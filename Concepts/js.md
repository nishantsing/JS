[Build A REST API With Node.js, Express, & MongoDB - Quick WDS](https://www.youtube.com/watch?v=fgTGADljAeg)

[Toast Notification Library WDS](https://www.youtube.com/watch?v=HhpbzPMCKDc)

[Speed Up Your React Apps With Code Splitting - WDS](https://www.youtube.com/watch?v=JU6sl_yyZqs&list=WL&index=3)

- closure
- hoisting
- asynchronous js(callbacks, promises, async await)
- ES6(arrow fn, destructuring, HOF, spread operator), ES5

```js

let waitFor = await waitTimeout(2000);

{
waitTimeout: async function(waitFor){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(()=>resolve("!done"), waitFor);
    })
    return promise
},

getRandomString: function(length){
    var randomChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
    var result = '';
    for(var i = 0; i < length; i++){
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return result
}
}


async function waitTimeout(waitFor){}
let waitTimeout = (waitFor)=>{}
```

#### To genrate UUID avoid using 'import {v4 as uuidv4} from uuid'

```js
import { v4 as uuidv4 } from "uuid";
console.log(uuidv4());

use crypto API
console.log(crypto.randomUUID());
```

##### Normal fn VS Arrow fn

- use arrow fns only when using as anonymous fn inside callback
- functions with function keyword and var variable are hoisted.

```js
function doubleNumbers(numbers) {
  return numbers.map((n) => n * 2);
}
```

- use arrow fn for specific this usage

```js
document.addEventListener('click', function(e) {
    console.log("FUNCTION ", this. e.target);
    //this keyword will be whatever u click on(document)
})


document.addEventListener('click', e=>{
    console.log("ARROW ", this. e.target);
    //this keyword defaults to outer context.(window)
}
```

- this with normal fns

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  printName: () => {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

person.printName(); // undefined undefined
// when using arrow fn the this keyword is coressponding to whatever is outside of the thing we are inside of.

// you can correct this using normal functions

const person = {
  firstName: "John",
  lastName: "Doe",
  printName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
    // or below way also works
    // printName(){
    //  console.log(`${this.firstName} ${this.lastName}`);
    // }
  },
};

person.printName();
```
#### How to hideapi keys in React or any frontend request.

* create a small backend with single route and in that do the api call with keys instead of doing the call through front end. In frontend do call the route u created in the backend

this will lead to cors error(in node u can use cors directly).


# Variable declaration
use const and let instead of var to avoid accidental variable reassignment and enforces block scoping.

# Template literals
`${variable_name}`

```js
const firstName = 'John'
const fullName = `${firstName} Doe`
console.log(fullName)
```
# Destructuring

## Object destructuring

```js
const person = {
    name: 'John Doe',
    age:25
}

const {name, age} = person;
console.log(name);
console.log(age);
```


## Array Destructuring

```js
const numbers = [1,2,3];
const [first, second, third]= numbers
console.log(first)
console.log(second)
console.log(third)

```

# Functions


```js
//Regular way 1 (Hoisted that means can be called before the declaration)
function add(a, b){
    return a+b
}

//Regular way 2(Not hoisted since const/ let keyword is used, so cannot be called before declaration, RefernceError) if you use var it will also not work and return( TypeError) as its hoisted but add will be undefined till it reaches the fn def.
const add = function(){
    return a+ b
}

```


## Arrow fns

- do not have own this binding

```js
const add = (a,b)=>{console.log(a+b)}

```


```js
const user = {
    name: "John Doe",
    regularFunction: function(){
        console.log(this.name)
    },
    arrowFunction:()=>{
        console.log(this.name)
    }
}

user.regularFunction() // John Doe
user.arrowFunction() // undefined
```
- we can take advantage of this in click events when this in normal function will refer to the target object and arrow function this will point to window object.


# Array High Order Functions(forEach, map(), filter(), reduce())

```js
//Map
const numbers =[1,2,3,4,5,6,7]
const doubled = numbers.map((num)=>{
    return num*2
})
console.log(doubled)

//Filter
const evenNumbers = numbers.filter(num => num%2===0)
console.log(evenNumbers)

//Reduce
const sum = numbers.reduce((acc, num)=> acc+num,0)
console.log(sum)
```

# Iterators

## Array Iterators(for, for of, forEach)

```js
const numbers =[1,2,3,4,5,6,7]
//For loop
for(let i = 0;i<numbers.length;i++){
    console.log(numbers[i])
}

//for of
for(let i of numbers){
    console.log(i)
}

//forEach
numbers.forEach((item, index)=>{
    console.log(item)
})
```

## Object Iterators(for in)

```js
const person = {
    name: 'John Doe',
    age:25
}

console.log(person.name)
console.log(person['name'])


for(let item in person){
    console.log(item)
    console.log(person[`${item}`])
}
```


# Spread syntax

- clones(shallow copy[first level is only copied]) of array and objects(For deep copy use structuredClone method), also passes multiple arguments to a function. 
- Dont use spread syntax inside the loop as it will create O(n2) time complexity

```js
//Cloning array
const numbers =[1,2,3,4,5,6,7]
const numbersCopy = [...numbers]

//Merging arrays
const restNumbers = [8,9]
const merged = [...numbers, ...restNumbers]

// Cloning Objects
const person = {
    name: 'John Doe',
    age:25,
    address:{
        flatNo: 1,
        building:'ABC Society'
    }
}

const personCopy = { ...person }
personCopy.name = 'John Cena' // only personCopy object changes as its copied
personCopy.address.flatNo = 2 // both changes as it is referenced to avoid this use structuredCopy method
console.log(person)

const personCopy = structuredClone(person)
personCopy.name = 'John Cena' // only personCopy object changes as its copied
personCopy.address.flatNo = 2 // only personCopy object changes as its copied 
console.log(person) 
console.log(personCopy)


//Passing multiple arguments
console.log(Math.max(...numbers))
```
# setTimeout and setInterval
setTimeout runs once setInterval runs in intervals.

# this 
 - In browser this refers to window object which has all broser apis
 - In node it refers to an global object

 "use strict" instead of this window is used to access window object.

```js
const person = {
    name: 'John Doe',
    age: 25,
    address: {
        flatNo: 1,
        building: 'ABC Society'
    },
    getPersonDetails: function () {
        //console.log(`My name is ${name} and my age is ${age}`) // Error
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

// person.getPersonDetails();
const personDetails = person.getPersonDetails;
personDetails() // My name is undefined and my age is undefined

// Always look on the left of the function to know its this value.

```
## bind

- use to bind a method to an object
- You want to use a function with multiple objects so instead of writing in each one of them we can bind them.

```js
function getPersonDetails(date) {
    console.log(`My name is ${this.name} and my age is ${this.age}, ${date}`)
}

const person1 = {
    name: 'John Doe',
    age: 25,
    address: {
        flatNo: 1,
        building: 'ABC Society'
    }
}

const person2 = {
    name: 'Jack Smith',
    age: 40,
    address: {
        flatNo: 13,
        building: 'XYZ Society'
    }
}

// getPersonDetails.bind(person1)
// getPersonDetails()// My name is undefined and my age is undefined

const person1Details = getPersonDetails.bind(person1)
person1Details()

```

# call
- There might be cases where you dont want to create an instance and just want to invoke directly without taking memory.

```js
const person1Details = getPersonDetails.bind(person1)
person1Details()

// instead of this you can directly do
getPersonDetails.call(person1, 1998)
 getPersonDetails.call(person2)

```
## apply
- The addition parameters are passed as an array. Everything else remain same.

```js
getPersonDetails.apply(person1, [1998])

```

# Class

```js
class User{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    describe(){
        console.log(`${this.name} is now a user on this website and his age is ${this.age}`)
    }
}

const user = new User("John Doe", 25);
user.describe();

```


# Closures

# Hoisting

# Async JS

## Callback

## Promises

## Async await




