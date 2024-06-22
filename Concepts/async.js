/* 1
// Global execution context

logger()
console.log(1)
console.log(2)
console.log(3)


//Functional execution context

function logger() {
    console.log(4)
    finish()
    console.log(5)
    function finish() {
        console.log('finished')
    }
}
*/

/* 2
function first() {
    console.log(1)
}

function second() {
    setTimeout(() => {
        console.log(2)
    }, 0);
}


function third(){
    console.log(3)
}


first()
second()
third()

*/

/*
//3. Callback
function message() {
    console.log("hello there")
}

//logger becomes higher order function as its a function which takes a function as parameter
function logger(message) {
    message()
}

logger(message)

*/

/*4. Fixing the 2. example to work synchronously 

function first() {
    console.log(1)
}

function second(callback) {
    setTimeout(() => {
        console.log(2)
        callback()
    }, 0);
}


function third() {
    console.log(3)
}


first()
second(third)
*/

/* 5. callback Hell 

function callbackhell() {
    setTimeout(() => {
        const data = { user: "Johnny" }
        console.log(data)
        setTimeout(() => {
            console.log("Data has been updated")
        }, 1000);
    }, 500);
}

callbackhell()
*/

/*6.  Promises
const promise = new Promise((resolve, reject) => {
    resolve({user:"Blanka"})
    reject("Server not availavble")
})

promise.then((data) => {
    return data
}).then(user=>{
    console.log(user)
})
.catch(err => {
    console.log(err)
})
*/

/* Actual promise usage

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then((data) => console.log(data));

*/

/* 8. Async await ES6 */
async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log('Something went wrong')
        console.log(err)
    }

}
getTodos()

// 9. Explore(Promise.All and other from MDN)