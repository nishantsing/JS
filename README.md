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
