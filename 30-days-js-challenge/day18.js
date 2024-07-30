// Day 18. Algorithms
// A1. Sorting Algorithms

// Implement the bubble sort algo. to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Loop through the entire array
    do {
        swapped = false;

        // Traverse the array from the beginning to the n-i-1 position
        for (let i = 0; i < n - 1; i++) {
            // Compare the adjacent elements
            if (arr[i] > arr[i + 1]) {
                // Swap if the element is greater than the next
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // Reduce the range for the next iteration
        n--;
    } while (swapped); // Continue until no swaps are made

    return arr;
}

// Example usage

const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);

const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);

// Implement the selection sort algo. to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    let n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the index of the smallest element in the unsorted portion
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage

const array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array1);

const sortedArray1 = selectionSort(array1);
console.log("Sorted array:", sortedArray1);

// Implement the quicksort algo. to sort an array of numbers in ascending order. Log the sorted array.
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }

    // Choose a pivot element (e.g., the last element)
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    // Partition the array into left and right sub-arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively apply quicksort to the left and right sub-arrays and combine results
    return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage

const array2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array2);

const sortedArray2 = quicksort(array2);
console.log("Sorted array:", sortedArray2);

// E1. Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }

    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the sorted halves into a single sorted array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concat remaining elements of left array (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage

const array4 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array4);

const sortedArray4 = mergeSort(array4);
console.log("Sorted array:", sortedArray4);

// A2. Searching Algorithms
// Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target value
        }
    }
    return -1; // Return -1 if the target value is not found
}

// Example usage

const array5 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 50;

console.log("Original array:", array5);
console.log("Target value:", target);

const index = linearSearch(array5, target);

if (index !== -1) {
    console.log(`Target value ${target} found at index ${index}.`);
} else {
    console.log(`Target value ${target} not found in the array.`);
}

// Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        // Check if the target is present at mid
        if (arr[middle] === target) {
            return middle; // Return the index of the target value
        }

        // If target is greater, ignore the left half
        if (arr[middle] < target) {
            left = middle + 1;
        }
        // If target is smaller, ignore the right half
        else {
            right = middle - 1;
        }
    }

    return -1; // Return -1 if the target value is not found
}

// Example usage

const sortedArray12 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target1 = 50;

console.log("Sorted array:", sortedArray12);
console.log("Target value:", target1);

const index1 = binarySearch(sortedArray12, target1);

if (index !== -1) {
    console.log(`Target value ${target1} found at index ${index1}.`);
} else {
    console.log(`Target value ${target1} not found in the array.`);
}

// String Algorithms

// Write a fn to count the occurences of each character in a string. Log the character counts.
function countCharacterOccurrences(str) {
    const counts = {}; // Object to store character counts

    // Iterate through each character in the string
    for (const char of str) {
        // If the character is not in the counts object, add it with a count of 1
        // Otherwise, increment its count
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

// Example usage

const inputString = "hello world";
const characterCounts = countCharacterOccurrences(inputString);

console.log("Character counts:", characterCounts);

// Write a fn to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstringWithoutRepeating(str) {
    let start = 0;
    let maxLength = 0;
    const seen = new Set(); // To track characters in the current window

    for (let end = 0; end < str.length; end++) {
        while (seen.has(str[end])) {
            // Remove character from set and move start pointer
            seen.delete(str[start]);
            start++;
        }

        // Add the current character to the set
        seen.add(str[end]);

        // Update the maximum length of substring found
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage

const inputString1 = "abcabcbb";
const lengthOfLongestSubstring = longestSubstringWithoutRepeating(inputString1);

console.log(
    "Length of longest substring without repeating characters:",
    lengthOfLongestSubstring
);

// A4. Array Algorithms

// Write a fn to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than the length of the array

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
            start++;
            end--;
        }
    }

    // Reverse the entire array
    reverse(0, n - 1);
    // Reverse the first k elements
    reverse(0, k - 1);
    // Reverse the remaining elements
    reverse(k, n - 1);

    return arr;
}

// Example usage

const array3 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log("Original array:", array3);

const rotatedArray = rotateArray(array3, k);
console.log("Rotated array by", k, "positions:", rotatedArray);

// Write a fn to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Merge both arrays while there are elements in both
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage

const array11 = [1, 3, 5, 7];
const array12 = [2, 4, 6, 8];

console.log("Array 1:", array11);
console.log("Array 2:", array12);

const mergedArray = mergeSortedArrays(array11, array12);
console.log("Merged array:", mergedArray);

// A5.Dynamic Programming(Optional)

// Write a fn to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    const dp = new Array(n + 1); // Array to store Fibonacci numbers
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Example usage

const n = 10; // Find the 10th Fibonacci number

console.log(`Fibonacci number at position ${n}:`, fibonacci(n));

// Log Fibonacci numbers from 0 to 10
for (let i = 0; i <= n; i++) {
    console.log(`Fibonacci number at position ${i}:`, fibonacci(i));
}

// Write a fn to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1)
        .fill(null)
        .map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // Max value by including or excluding the current item
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            } else {
                // Cannot include the current item
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

// Example usage

const weights = [1, 2, 3, 8, 7, 4];
const values = [20, 5, 10, 40, 15, 25];
const capacity = 10;

const maxValue = knapsack(weights, values, capacity);

console.log("Maximum value that can be obtained:", maxValue);

// F1. Write a script that implement bubble sort, selection sort, quicksort, mergesort algorithms to sort arrays.

// F2. Create a script that implements linear search and binary search algorithms to find values in arrays.

// F3. Write a script that counts character occurences and finds the longest substring without repeating characters.

// F4. Create a script that rotates arrays and merges sorted arrays.

// F5. Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming(optional).
