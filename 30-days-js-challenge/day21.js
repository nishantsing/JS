// Day 21. LeetCode Easy

// A1. Two Sum
// Write a script that includes a fn to solve the "Two Sum" problem and logs the indices of the two numbers.
/*
numToIndex: An object used to map each number to its index as you iterate through the array.

Loop through nums:

complement: The number that, when added to the current number, equals the target.
Check if complement exists in numToIndex: If it does, it means you’ve previously seen a number that, when added to the current number, equals the target. You return the indices of these two numbers.
Store the index of the current number: If the complement is not found, store the index of the current number in numToIndex.
Return the result: If a valid pair is found, their indices are returned. If no valid pair is found after iterating through the array, return an empty array or handle the case as needed.
*/

function twoSum(nums, target) {
    const numToIndex = {}; // This will store the number and its index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement

        if (numToIndex.hasOwnProperty(complement)) {
            // If the complement exists in the map, we found the solution
            return [numToIndex[complement], i];
        }

        // Store the index of the current number
        numToIndex[nums[i]] = i;
    }

    // If no solution is found, return an empty array (or handle as needed)
    return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

// A2. Reverse Integer
// Create a script that includes a fn to reverse a integer and handles edge cases.
function reverseInteger(x) {
    const INT_MAX = 2147483647; // Maximum value for a 32-bit signed integer
    const INT_MIN = -2147483648; // Minimum value for a 32-bit signed integer

    let reversed = 0;
    let sign = Math.sign(x); // Get the sign of the number
    x = Math.abs(x); // Work with the absolute value of x

    while (x !== 0) {
        let pop = x % 10; // Get the last digit
        x = Math.floor(x / 10); // Remove the last digit from x

        // Check for overflow before multiplying and adding
        if (
            reversed > Math.floor(INT_MAX / 10) ||
            (reversed === Math.floor(INT_MAX / 10) && pop > 7)
        ) {
            return 0; // Overflow
        }
        if (
            reversed < Math.ceil(INT_MIN / 10) ||
            (reversed === Math.ceil(INT_MIN / 10) && pop < -8)
        ) {
            return 0; // Underflow
        }

        reversed = reversed * 10 + pop; // Append the digit to the reversed number
    }

    return reversed * sign; // Restore the original sign
}

// Example usage
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
console.log(reverseInteger(1534236469)); // Output: 0 (overflow)

// A3. Palindrome Number
// Write a script that includes a fn to check if an integer is a palindrome and logs the result.
function isPalindromeMath(x) {
    // Negative numbers are not palindromes
    if (x < 0) return false;

    let original = x;
    let reversed = 0;

    while (x > 0) {
        const digit = x % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Append the digit to the reversed number
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    // Check if the reversed number is equal to the original number
    return reversed === original;
}

// Example usage
console.log(isPalindromeMath(121)); // Output: true
console.log(isPalindromeMath(-121)); // Output: false
console.log(isPalindromeMath(10)); // Output: false

// A4. Merge Two Sorted Lists
// Write a fn that takes two sorted LL and returns a new sorted list by merging them.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to merge two sorted linked lists
function mergeTwoLists(l1, l2) {
    // Create a dummy node to serve as the start of the merged list
    let dummy = new ListNode();
    let current = dummy;

    // Traverse through both lists
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // If there are remaining nodes in l1 or l2, append them
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    // Return the merged list, starting from the next node of dummy (skipping the dummy node)
    return dummy.next;
}

// Helper function to print the linked list
function printList(node) {
    let current = node;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example usage
// Creating linked list 1: 1 -> 2 -> 4
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));

// Creating linked list 2: 1 -> 3 -> 4
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// Merging the linked lists
let mergedList = mergeTwoLists(l1, l2);

// Printing the merged linked list
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

// A5. Valid Parenthesis
// Write a script that includes a fn to check if a string of parenthesis is valid and logs the result.
function isValid(s) {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let char of s) {
        if (char in map) {
            // Check for the matching opening bracket
            const topElement = stack.length === 0 ? "#" : stack.pop();
            if (map[char] !== topElement) {
                return false;
            }
        } else {
            // Push the opening brackets onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets are matched
    return stack.length === 0;
}

// Example usage
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
