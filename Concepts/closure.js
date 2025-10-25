// 1. Counter

function counter() {
    let count = 0; // private variable
    return () => ++count
    // return () => {
    //     return ++count
    // }
}


const incrCounter1 = counter()
console.log(incrCounter1())
console.log(incrCounter1())

const incrCounter2 = counter()
console.log(incrCounter2())
console.log(incrCounter2())
console.log(incrCounter2())

// incrCounter1 and incrCounter2 don’t share the same count, because each call to counter() creates a new execution context.

// The variable count remains encapsulated inside each closure — it’s not accessible from outside.

// If you wanted a shared counter (both incrementing the same value), you could move let count = 0 outside the function

// 2. Memorization
const memorize = function (fn) {
    let cache = {}
    return (arg) => {

        // if (cache[arg]) {
        //     console.log('Value fetched from cache')
        //     return cache[arg]
        // } else {
        //     const result = fn(arg)
        //     cache[arg] = result
        //     return result
        // }
        if (arg in cache) {
            console.log('Value fetched from cache');
            return cache[arg];
        }
        const result = fn(arg);
        cache[arg] = result;
        return result;
    }
}

const square = memorize(n => n * n)
console.log(square(4))
console.log(square(4))
console.log(square(4))

const cube = memorize(n => n * n * n)
console.log(cube(3))
console.log(cube(3))