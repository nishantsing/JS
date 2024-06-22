// Remove duplicate elements from an array
const arr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8]

const uniqueElements = arr.filter((element, index) => {
    return arr.indexOf(element) === index
})


//Function to generate fibonacci series of given length
function fibonacci(length) {
    const fibArray = [0, 1]
    for (i = 2; i < length; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray
}

const series = fibonacci(7)
console.log(series)


//Reverse string using inbuilt method

let string = 'javascript';

let reversedString = string.split('').reverse().join('');
console.log(reversedString)

// swap values of two variables without the need of temporary variable 

let x = 5;
let y = 10;

[x, y] = [y, x]
console.log(x)
console.log(y)


// add an element to an array if its not already present.

let arr1 = [1,2,3,4];

arr1.push(4)
arr1 = [...new Set(arr1)] // to have unique values.

// new Set(arr1) creates a set(object) that has unique values from the array provided
// and it spreads the content of this object inside the [...] returning array of unique values.

// above thing can be done in more ways.

function addElementIfNotPresent(arr, element) {
    if (!arr.includes(element)) {
        arr.push(element);
    }
}

// Example usage
var myArray = [1, 2, 3, 4];
addElementIfNotPresent(myArray, 3); // Element 3 already exists, so it won't be added
addElementIfNotPresent(myArray, 5); // Element 5 doesn't exist, so it will be added
console.log(myArray);