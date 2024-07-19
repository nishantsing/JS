# JS Concepts

## Closures
- scoping and closures overlap a lote. closures are special version of scoping.

- nested fns

```js

function outer(){ 
    const age = 20;
    function inner(){
        // age++
        console.log(age)
    }
    // age = 30 // will use most up to date value of that variable.
    return inner
}

const func = outer() // this executes the outer function but the returned inner fn still has the outer scope (outer variables, parameter as well) binded with it.

func()
func()
func()
```

- As soon as fn is executed everything inside the scope of it is garbage collected but for closures it keeps the scope in heap memory instead of garbage collected.

- benefits 
    - creating private variables
    - creating helper fns 

- but module based js the variables you dont export are private anyways

- closure qns

```js
for(var i =0;i<3;i++){ // 333, with let 123
    setTimeout(()=>console.log(i), 100)
}
// The above code is execute internally as below
var i = undefined // single instance globally
for(i =0;i<3;i++){ // 333, with let 123
    setTimeout(()=>console.log(i), 100)
}

// but with let we have 3 separate i variables for each iteration as let is block scope
```
