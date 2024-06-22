const array = [1, 2, 3, 4];

console.log(array.map(num => num * 2)); // not mutate
console.log(array);

// reverse, sort and splice mutate
const backwards = array.reverse();
console.log("backwards: ", backwards);
console.log("array: ", array);

const dontTouchMe = [1, 2, 3, 4];

//Reverse Item  
dontTouchMe.toReversed();
console.log("dontTouchMe: ", dontTouchMe);

// Sort items
dontTouchMe.toSorted();

// Remove items
dontTouchMe.toSpliced(1, 2);

// Replace item
dontTouchMe.toSorted(1, 5);