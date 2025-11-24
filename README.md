# JS

- codeium a tool similar to github copilot
- [JavaScript Full Course | JavaScript - Learn Everything | Sheryians Coding School](https://youtu.be/a-wVHL0lpb0)
- [Part 2 – Master JavaScript & Become a Real Developer | Full Course](https://youtu.be/1aR7tcmWo_w)
- [Part 3 – Advanced JavaScript, Projects & Real Developer Mindset | Full Course](https://youtu.be/wH6uf20dpAo)
- [Part 4 – JavaScript for Placements | Get Ready for Your First Developer Job](https://youtu.be/GVdBPJzmwQg)
- [JS Finally Made Sense After This | JS Project 2 | Kanban Board](https://youtu.be/2aHJ-MKY1b0?list=PLbtI3_MArDOnNvk8CCCSR01CQ8B8iNh-A)
- [Three.js Bootcamp: Zero to Mastery](https://zerotomastery.io/courses/learn-three-js/)
- [HTML, CSS & JavaScript Bootcamp - 10 HOURS & 15 PROJECTS ](https://youtu.be/kAiX0itnonM)


## Concepts
- [Why do we need JSON.stringify and parse?](https://youtu.be/E4FaVuGhDhk)
- [How to style console logs: Color and more!](https://youtu.be/01TC2LXFsac)         

## JS DSA
- [Master the Basics | DSA with JavaScript | Part 1](https://youtu.be/h86FQ7vrnds)
- [Understanding Conditionals | DSA with JavaScript | Part 2](https://youtu.be/S1wa0ojaJiw)
- [Everything About Loops | DSA with JavaScript | Part 3](https://youtu.be/H88hkdA02tY)
- [Mastering Arrays | DSA with JavaScript | Part 4](https://youtu.be/CW3gjRgL4w4)
- [Strings in JavaScript | DSA with JavaScript | Part 5](https://youtu.be/X8C4_oLQOzU)
- [Mastering Advance Array Problems | DSA with JavaScript | Part 6](https://youtu.be/AaYggzBvD4Q)
- [Pattern Programming | DSA with JavaScript | Part 8](https://youtu.be/NaRPbIXRwhE)
- [Sorting Algorithms | DSA with JavaScript | Part 9 | Bubble Sort , Selection Sort & Insertion Sort](https://youtu.be/r51jHrnjPxE)
- [Recursion : Level - 1 | DSA with JavaScript | Part 10 | Stack Visualization](https://youtu.be/euOD2T7Yg7M)
- [Binary Search Algorithm | DSA with JavaScript | Part 12 | Real-World Example](https://youtu.be/OPgervpLrzM)
- [Merge Sort | DSA with JavaScript | Part 13 | Real-World Example](https://youtu.be/LSNVrTn5Ycw)
- [Quick Sort | DSA with JavaScript | Part 14 | Real-World Example](https://youtu.be/Rl93i7I67NY)
- [Cyclic Sort | DSA with JavaScript | Part 15 | Missing Number | Find all the Number Disappeared](https://youtu.be/HmBOGkmp-xg)
- [Search insert Position | Binary Search | DSA with JavaScript | Part 16](https://youtu.be/ZdfQVT4br80)
- [Search in rotated Sorted array | BInary Search | DSA with JavaScript | Part 17](https://youtu.be/XOyYRkEEE_M)
- [Complete Hashing in 1 Video + MAANG Level Problems | DSA in JavaScript | Part 20](https://youtu.be/Z8iFL7d0f90)

## Searching Open source contribution
- is:issue is:open label:"good first issue" language:JavaScript
- is:issue is:open label:"help wanted" language:JavaScript
- is:issue is:open label:"beginner" language:JavaScript

#### Doing Open Source contribution

- get the issue assigned to urself.
- fork the repo
- git clone <url> (url of the forked repo)
- follow the installation step mentioned in readme of the repo
- fix the issue
- git checkout -b "fix/<branchname>" (dont promote on the main branch, always create a branch)
- git add .
- git commit -m ""
- git push
- compare and pull request
- Title (Bug Fix: ), description

#### Syncing the forked repo
- [Configuring a remote repository for a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork)
- [Syncing a fork branch from the command line](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)
  
- Clone your fork (if not already done)
git clone https://github.com/YOUR_USERNAME/YOUR_FORK.git
cd YOUR_FORK
git remote -v
origin <your-fork-repo-url> (fetch)
origin <your-fork-repo-url> (push)

- Add the upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
git remote -v
origin <your-fork-repo-url> (fetch)
origin <your-fork-repo-url> (push)
upstream  <oiginal-repo-url> (fetch)
upstream <oiginal-repo-url> (push)

- Fetch the latest changes from the upstream repository
git fetch upstream

- Switch to your main branch
git checkout main

- Merge the changes from the upstream repository into your local main branch
git merge upstream/main

- Push the changes to your GitHub fork
git push origin main

## Power of JS
- Threejs - 3D Visualization
- React, Angular, Vue, Next - Web Development, PWA
- React Native - Mobile Development
- Phaser - Game development
- Tensorflow - Machine Learning
- Node - Server side development
- Electron - Desktop App Development
- D3 - Data Manipulation and Visulaization


## Mistakes to avoid
- Avoid nested ifs, check failure conditions and exit if it mets. There will be muliple ifs instead of nested ifs.(Avoid unnecessary complexity).
- Too much functionality being handled in a single function, each function should have one job.(Single responsibility).
- Difference between primitive types(String, number, boolean, null, undefined) and non-primitive(object, array, functions, map, set). In primitive type we deal with actual values, but with object we deal with references. Instead of asssigning one object to other use spread operator to create new objects.
- Using many eventlistener instead of event delegation. Add one event listener to parent element(e.target can be used to match the child) and event delegation can be used instead of each child element.
- overusing foreach instead of using other array methods like filter and map.
- difference between for of and for in loops

- Use Object.freeze(objectName) to freeze the config objects or immutable objects, keep in mind it only freezes the top level object and not the nested objects as value in the object - In strict mode "use strict" throws an error and in not strict mode ignores.


- instead of checking equality here check for greater or less than a threshold

```js
const num = 0.1 + 0.2

//DONT USE
if(num === 0.3) issue as num is 0.30000000000004

// USE
Math.abs(num - 0.3) < Number.EPSILON
```


- how to check if a variable is actually an object
```js
const x = {}
if(typeof x === "object" && x!== null && !Array.isArray(x))
```

- overusing arrow fns and running into "this" problem - use arrow fn in top level.
- overusing optional chaining - to avoid errors that needs to be thrown

## Dealing with JS like a pro
- when dealing with libraries(like library for database, auth) while using library functions try to abstract them into your functions if the library function is used in multiple pages, it provides ease of updation.(adapter and facade style patterns)

## Debugging

- try to look for errors in chrome dev tools console.
- put console.log statements 
- using debugger keyword in code to trigger chrome dev tools debugger or you can also open the chrome dev tools sources find the file and put debug point.
- resume: searches for next debug point or end of file (F8)
- stepover: moves to next line(F10)
- stepin: moves inside a fn, or loop or works as stepover if there is no function.(F11)
- stepout: (F11)
- step: works similar to stepin but works differently for async code where stepin will go inside the settimeout waiting for the time mentioned but step will follow the execution order.
- pause on uncaught exceptions - checked
- Call stack
- breakpoint - click on the line of the file, without adding debugger statement in code.
    - conditional breakpoint,trigger breakpoint, log breakpoint {variable_name}
- Event Listener breakpoints, XHR/fetch breakpoints, DOM breakpoints, Global listeners.
- Watch tab (any (multiple) variable name), instead can also check scope section.

- debug in vscode.
    - Run and Debug(Web Apps (Chrome))
    - url where your site is running

- network, perfoemance, application, lighthouse tabs

## Memory Management

- open your site in incognito mode.(No external extension memory)

```js
class Test{
    constructor(name){
        this.name = name
    }
}

// Since these are in global scope they wont be cleaned by the garbage collector as they can be used in other places
const globalTest = new Test("globalTest")
const globalString = "globalString"


{
    //not global scope // locally scoped
    const innerTest = new Test("innerTest") // cleaned
    const innerString = "innerString" // not cleaned
    console.log(innerTest.name)
    console.log(innerString)
    // as soon as we go out of this cope the variables innerTest will be garbage collected(cleaned from memory). object, arrays, class, function non- primitive
    // while innerString stays forever as its primitive type
}
```
- Memory Tab in chrome web tool,
  - Heap Snapshot
  - You can compare snapshots, by taking one at the beginning of program by putting debugger and by letting it pass and creating another snapshot.
 
- Diff. b/w week and normal map and sets.
  - week map will have garbage collector automatically clean keys for you.
  - You cannot loop over week map and week set
 
```js

const map = new WeakMap()
const outerObj = {i:-1}
map.set(outerObj, "outer")
let i =0

setInterval(()=>{
    const obj = {i} // as long as this in scope the key exists in map, it has to be obj as obj can be garbage collected.
    map.set(obj, `Index ${i}`) // garbage collected can't be used out of set interval
    i++
},1)
```

## JS binding
- If there is a function written named x inside a file f1, the x refers to f1 this context but I am calling x from f2(by not creating instacing but x was passed as argument in f2) which is passing its on this, how can I bind this of f1 to x?
- In some setup or start method
wherever in f1 x is accessible using this, we can add this.x = this.x.bind(this)

```js
// M1. bind this in f1
x = ()=>{

}.bind(this)


// M2. bind this when calling x from f2 using f1 instance
const instanceOfF1 = new f1();

// Bind f1's this context to x when calling from f2
instanceOfF1.x.bind(instanceOfF1)();

// or
// instanceOfF1.x.call(instanceOfF1);
```
## Cyclic Dependency

- If f1 refers to cf1 then anything inside cf1 should not refer f1 or any dependency thats not common because it might create cyclic dependency.

## PWA

- npm create solid
- npm run dev
- add manifesto file for pwa
- register the manifest file in the app header(the starting index.html file).
- defining and registering service worker in the same index.html file after the manifest registration.
- Web APIs - Media Devices, Service Workers, Web Authentication Web components
- [What PWA can do](https://whatpwacando.today/)
- Feature (Media capture, geo location, deviceorientation, devicemotion, password auth, speech recognition)


## Difference between display:none; and visibility:hidden;
- display none also free the space taken by the element in UI while visibility hidden makes element hide in UI but the space is still taken by the element.

## Sets, Maps and JS Object

- Sets(internally uses hash table like structure to store unique values) - like an array but don't store duplicate values....add, has, delete - methods, size - property , Iterable 
- Maps Iterable(forEach, for ... of) keys can be of any type, insertion order is maintained....get, set, delete - methods, size - property
- JS Object - Non Iterable(for...in, Object.keys(obj), Object.values, Object.entries)....only string and symbol as keys, if anything else converts to string, no order maintained.

## ES6 Class
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating an instance of Person
let person1 = new Person('Alice', 30);
console.log(person1.greet()); 

```

## Constructor function

```js
// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method using prototype
Person.prototype.greet = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}

// Creating an instance of Person
let person2 = new Person('Bob', 25);
console.log(person2.greet()); 

```

## Functions variants

### Function Declaration

```js
function add(num1, num2){
  return num1 + num2;
}

```

### Function Expression

- An anonymous function gets assigned to a variable.

```js
let add = function (num1, num2){
  return num1 + num2;
}
```

- Function Declaration are hoisted while Function expression are not, so we can call function declaration before declaring it.
```js
add(1,2) // ERROR- Cannot access 'add' before initialization
let add = function(num1, num2){
    console.log(num1+num2);
}

add(1,2) // ERROR - add is not a function
var add = function(num1, num2){
    console.log(num1+num2);
}

add(1,2) 
function add(num1, num2){
  console.log(num1+num2); // 3
}

```

### Arrow Function

- Has to be function expression and cannot be declaration.

```js
let add = (num1, num2)=>{
  return num1+ num2
}

let add =(num1, num2)=> num1 + num2; // If you have one statement and you want to return that

let greet = name => `Hello ${name}` // If you have single argument no need for brackets

```

- Doesn't override this keyword

```js
class Calculator{
  constructor(start = 0){
    this.total = start;
  }

  add(...nums){
    //nums.forEach(function(num){
    //  console.log(this);
    //  this.total += num;
    //})

    //let instance = this //or let that = this
    //nums.forEach(function(num){
    //  instance.total += num;
    //})

    nums.forEach(num=>this.total+=num)
  }
}

let count = new Calculator(42);
count.add(5);
console.log(5)

```

## Handle Async Code


### Promises

```js
// In 5 seconds, resolve the promise
// Pass along "Hi, universe!" to any callback methods
let sayHello = new Promise((resolve, reject)=>{
  setTimeout(function(){
    resolve("Hi, universe!")
  }, 5000)
});

//Handle the pronce once it resolves

sayHello.then((msg)=>{
  console.log(msg)
}).catch((err)=>{
  console.log(err)
})

```

#### Promise Chaining

```js
let count = new Promise((resolve, reject)=>{
  resolve(1)
});

.then is also similar to promise call and run one after the other completes
count.then((num)=>{
  console.log(num)
  return num+1
})
.then((num){
  console.log(num)
  return num+1
})
.then((num){
  console.log(num)
  return num+1
})
.catch((err)=>{
  console.log(err)
})
.finally(function(){
  console.log('I run no matter what!')
})

```

#### Practical example

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) //.json method returns a promise
      .then(json => console.log(json))
```


#### Promise All

```js
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts')
  fetch('https://jsonplaceholder.typicode.com/users')
]).then(function(responses){ // responses would be an array of response
  return Promise.all(responses.map(function(response){
    return response.json() // both response.json will return a promise and will proceed only when both are resolved
  }))
}).then(function(data){
  console.log(data)
}).catch(function(err){
  console.log(err)
})


```

### Async And Await


```js

function traditionalFn(){

}

traditionalFn




// An async function that waits for asynchronous code to resolve before continuing

async function asyncFn(){
  await fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
    return response.json()
  }).then(function(data){
    console.log('Async Fetch', data);
  })

  console.log('Second') // Will wait for async code to complete and the only runthis statement.
}

asyncFn()

```

-  as soon as you make a function async it returns a promise
  ```js
    async function getTheAnswer (){
      return 42;
    }

    let answer = getTheAnswer();
    console.log(answer) //-> Promise

    // But to get 42 you can do is
    answer.then(function(data){
      console.log(data)
    })

    //OR

    async function logAnswer(){
      let answer = await getTheAnswer();
      console.log(answer)
    }

  ```

-  To handle errors in async await you have to wrap your code in try and catch with finally if required.


### Freezing an object

```js
const obj = {
  name: "Alice",
  age: 30
};

Object.freeze(obj);

// Attempting to modify the object
obj.age = 31; // This will have no effect in strict mode, and silently fail in non-strict mode

console.log(obj.age); // Still 30

```
- Shallow Freeze: Object.freeze() only performs a shallow freeze. If your object contains nested objects, the nested objects themselves won't be frozen. You'll need to recursively freeze them if you want deep immutability.


# CSS
console.log of css
```css
*{
    outline: 1px solid limegreen !important;
}
//OR
*{
    background: rgb(0 100 0 / 0.1) !important;
}
```
