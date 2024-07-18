//Day 6: Arrays

// Activity 1: Array Creation and Access

// Array of numbers from 1 to 5 and log it to console
const nums = [1, 2, 3, 4, 5];
console.log(nums);
// const nums = new Array(1, 2, 3, 4, 5);

// Access the first and last elements of array and log them to the console.
console.log(
    `First element : ${nums[0]} \nLast Element ${nums[nums.length - 1]}`
);

// Activity 2: Array Methods (Basic)

// Using push to add at end
nums.push(6);
console.log(nums);

// Using pop to remove last element
nums.pop();
console.log(nums);

// Using shift to remove first element
nums.shift(0); // removes ele at first position
console.log(nums);

// Using unshift to add at beginning element
nums.unshift(1);
console.log(nums);

// Activity 3: Arrow Methods (Intermediate)

// Using map to create new array where each number is doubled
let doubleNums = nums.map((num) => num * 2);
console.log(doubleNums);

// Using filter to create new array with only even numbers
let evenNums = nums.filter((num) => num % 2 === 0);
console.log(evenNums);

// Using reduce to calculate the sum of all numbers in the array
let sumOfNums = nums.reduce((acc, num) => acc + num, 0);
console.log(sumOfNums);

// Activity 4: Array Iteration

// use a for loop to iterate over the array, for...of
for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    process.stdout.write(nums[i] + ""); // needs to be string
}
console.log(); //to add new line
// for(let num of nums){
//      cosnole.log(num)
// }

// use a forEach loop to iterate over the array
nums.forEach((num) => console.log(num));

// Activity 5: Multi-dimensional Arrays

// Create a 2D array(matrix) and log the entire array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix);

// dynamic
// const rows = 3;
// const cols = 3;
// const matrix1 = [];

// for (let i = 0; i < rows; i++) {
//     matrix1[i] = [];
//     for (let j = 0; j < cols; j++) {
//         matrix1[i][j] = i * cols + j + 1;
//     }
// }

// console.log(matrix1);

// Access and log a specific element from the 2D array
const rowIndex = 1; // second row (index starts from 0)
const colIndex = 2; // third column (index starts from 0)
const element = matrix[rowIndex][colIndex];
console.log(element);

// Feature 1: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods

// Feature 2: Create a script that uses map, filter and reduce methods to transform and aggregate any data.

// Feature 3: Write a script that iterates over an array using both for loop and forEach method and logs each element.

// Feature 4: Write a script that demonstrates the creation and manipulation of a 2D array.
