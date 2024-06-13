# JS


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
