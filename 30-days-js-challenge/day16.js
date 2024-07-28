// Day 16. Recursion

// A1. Basic Recursion
// Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(num) {
    if (num == 0 || num == 1) return 1;

    return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(10));

// Write a recursive function to calculate the nth fibonacci of a number. Log the result for a few test cases.
// 0 1 1 2 3
const fib = function (num) {
    if (num == 0) return 0;
    else if (num == 1) return 1;

    return fib(num - 1) + fib(num - 2);
};

console.log(fib(3));
console.log(fib(10));

// A2. Recursion with Arrays
// Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
const sumOfArray = (arr) => {
    if (arr.length == 0) return 0;
    return arr[0] + sumOfArray(arr.slice(1));
};
console.log(sumOfArray([1, 2, 3]));

// Write a recursive function to find the max element in an array. Log the result for a few test cases.
function findMax(arr) {
    // Base case: If the array has only one element, return that element
    if (arr.length === 1) {
        return arr[0];
    }
    // Recursive case: Compare the first element with the maximum of the rest of the array
    else {
        const maxOfRest = findMax(arr.slice(1));
        return arr[0] > maxOfRest ? arr[0] : maxOfRest;
    }
}
console.log(findMax([1, 2, 3]));

// A3. String Manipulation with Recursion

// Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    // Base case: If the string is empty or has one character, return it as is
    if (str.length <= 1) {
        return str;
    }
    // Recursive case: Reverse the rest of the string and append the first character to it
    else {
        return reverseString(str.slice(1)) + str[0];
    }
}
console.log(reverseString("hello"));

// Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase for a case-insensitive comparison
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Base cases
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive case: Check the substring excluding the first and last characters
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("nan"));
console.log(isPalindrome("hello"));

// A4. Recursive Search
// Write a recursive fn to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    // Base case: If the array segment is empty
    if (low > high) {
        return -1; // Target not found
    }

    // Find the middle index
    const mid = Math.floor((low + high) / 2);

    // Base case: Check if the middle element is the target
    if (arr[mid] === target) {
        return mid;
    }

    // Recursive cases: Decide which half to search
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1); // Search in the left half
    } else {
        return binarySearch(arr, target, mid + 1, high); // Search in the right half
    }
}
console.log(binarySearch([1, 2, 3], 4));
// Write a recursive fn to count the occureneces of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
    // Base case: If the array is empty
    if (arr.length === 0) {
        return 0;
    }

    // Check if the first element matches the target
    const countInRest = countOccurrences(arr.slice(1), target);
    return (arr[0] === target ? 1 : 0) + countInRest;
}

console.log(countOccurrences([1, 2, 3, 3, 4, 5, 3], 3));
// A5. Tree Traversal (Optional)

// Write a recursive fn to perform an in-order traversalof a binary tree. Log the nodes as they are visited.
// Define a basic binary tree node structure
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Recursive function for in-order traversal
function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    // Traverse the left subtree
    inOrderTraversal(node.left);

    // Visit the current node
    console.log(node.value);

    // Traverse the right subtree
    inOrderTraversal(node.right);
}

// Example binary tree
const root = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(6, new TreeNode(5), new TreeNode(7))
);

// Perform in-order traversal and log the nodes
console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);

/*
        4
       / \
      2   6
     / \ / \
    1  3 5  7

    in-order: [1,2,3] 4 [5 ,6, 7]
*/

// Write a recursive fn to calculate the depth of a binary tree. Log the result for a few test cases.
// Recursive function to calculate the depth of the binary tree
function calculateDepth(node) {
    if (node === null) {
        return 0; // Base case: If the node is null, the depth is 0
    }

    // Calculate the depth of the left and right subtrees
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    // The depth of the current node is the maximum of the depths of the left and right subtrees plus 1
    return Math.max(leftDepth, rightDepth) + 1;
}

// Test cases

// Example binary tree
const tree1 = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4, new TreeNode(7), new TreeNode(8)),
        new TreeNode(5)
    ),
    new TreeNode(3, null, new TreeNode(6))
);

const tree2 = new TreeNode(
    10,
    new TreeNode(5),
    new TreeNode(15, new TreeNode(12), new TreeNode(20))
);

const tree3 = new TreeNode(1);

// Test case with an empty tree
const emptyTree = null;

// Logging results for test cases
console.log("Depth of tree1:", calculateDepth(tree1)); // Expected output: 4
console.log("Depth of tree2:", calculateDepth(tree2)); // Expected output: 3
console.log("Depth of tree3:", calculateDepth(tree3)); // Expected output: 1
console.log("Depth of empty tree:", calculateDepth(emptyTree)); // Expected output: 0

// F1. Write a script that includes recursive fn to calcuate the factorial and fibonacci numbers.

// F2. Create a script that includes fn to find the sum and maximum ele of an array.

// F3. Write a script that includes recursive functions to reverse a string and check if a string is palindrome.

// F4. Create a script that includes recursive fns for binary search and counting occureneces in an array.

// F5. Write a script that includes recursive fns for inorder traversal and depth calculation ofa binary tree(optional).
