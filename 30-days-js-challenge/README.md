# 30 days js challenge
[Hitesh Courses Free](https://courses.chaicode.com/learn)

[30 days js challenge - Hitesh](https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/)

## Day 1: Variables and Data Types
## Day 2: Operators
## Day 3: Control Structures
## Day 4: Loops
## Day 5: Functions

[MDN - rest parameters and more on functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
## Day 6: Arrays
## Day 7: Objects

[MDN - read more about set and get in js object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

## Day 8: ES6+ Features

## Day 9/10: DOM Manipulation/ Event Handling

- Learn more about the DOM manipulation and also animation, translation.

## Day 11: Promises and Async/Await

## Day 12. Error Handling

## Day 13. Modules

- 2 common ways commonjs and named(es6)

- commonjs is the default
- To unable Es6 you need to initialize npm init -y and add "type":"module" in package.json file.

- Use a module bundler like Webpack or Parcel to bundle multiple JS files into a single file. write a script to demonstrate the bundling process

    - npm install -D webpack webpack-cli
    - webpack.config.js
    ```js
    const path = require('path');

    module.exports = {
        entry: './src/index.js', // source file
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        mode: 'development'
    };

    ```
    - update package.json
    ```json

    "scripts": {
        "build": "webpack"
    }

    ```
    - npm run build

## Day 14. Classes

- creating class with properties and method
- extending that class using other class
- creating static method and properties in a class
- getter and setter for class
- private property in class

## Day 15. Closures 
## Day 16. Recursion


## checkout Flows in PostMan
- [Flows Postman - Hitesh YT](https://youtu.be/73xrwXL_DMA)
- try it pretty interesting.

## Day 17. Data Structures
## Day 18. Algorithms
## Day 19. Regular Expression.
## Day 20. Local Storage abd Session Storage
    - IndexedDB, cookies

#### localStorage/sessionStorage
#### .setItem(key, value) - value should be string
#### .getItem(key); - returns string
#### .removeItem(key)
#### .clear()


## Day 21. LeetCode Easy
## Day 22. LeetCode Medium
## Day 23. LeetCode Hard
## Day 24. Project 1 - Weather App
## Day 25. Project 2 - Movie App


## Inspect disaapearing element

- create a snippet in browser name it something
```js
setTimeout(()=>{
    debugger
}, 3000)
```
- run it and do whatever you want(tootlip hover)