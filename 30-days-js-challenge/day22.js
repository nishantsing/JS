// Day 22. Leetcode Medium

// A1. Add Two Numbers

// Write a fn that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each nide contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to simplify the code
    let p = l1,
        q = l2,
        current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = p !== null ? p.val : 0;
        let y = q !== null ? q.val : 0;

        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

// Test Case 1: (2 -> 4 -> 3) + (5 -> 6 -> 4)
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result1 = addTwoNumbers(l1, l2);
console.log("Test Case 1:");
printLinkedList(result1); // Expected output: 7 -> 0 -> 8

// Test Case 2: (0) + (0)
let l3 = createLinkedList([0]);
let l4 = createLinkedList([0]);
let result2 = addTwoNumbers(l3, l4);
console.log("Test Case 2:");
printLinkedList(result2); // Expected output: 0

// Test Case 3: (9 -> 9 -> 9) + (1)
let l5 = createLinkedList([9, 9, 9]);
let l6 = createLinkedList([1]);
let result3 = addTwoNumbers(l5, l6);
console.log("Test Case 3:");
printLinkedList(result3); // Expected output: 0 -> 0 -> 0 -> 1

// A2. Longest Substring without repeating characters
function lengthOfLongestSubstring(s) {
    let charSet = new Set(); // Set to store unique characters in the current window
    let left = 0; // Left pointer for the window
    let maxLength = 0; // Variable to store the maximum length of substring found

    // Iterate with the right pointer to explore the string
    for (let right = 0; right < s.length; right++) {
        // If the character is already in the set, move the left pointer
        while (charSet.has(s[right])) {
            charSet.delete(s[left]); // Remove the character at the left pointer
            left++; // Move the left pointer to the right
        }

        // Add the current character to the set
        charSet.add(s[right]);

        // Calculate the length of the current window and update maxLength if necessary
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected output: 3 (The longest substring without repeating characters is "abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Expected output: 1 (The longest substring without repeating characters is "b")
console.log(lengthOfLongestSubstring("pwwkew")); // Expected output: 3 (The longest substring without repeating characters is "wke")
console.log(lengthOfLongestSubstring("")); // Expected output: 0 (Empty string has no characters)

// A3. Container with most water
function maxArea(height) {
    let left = 0; // Pointer at the start
    let right = height.length - 1; // Pointer at the end
    let maxWater = 0; // Variable to store the maximum amount of water

    while (left < right) {
        // Calculate the width and the height of the current container
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);

        // Calculate the area with the current width and height
        let currentWater = width * minHeight;
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected output: 49
console.log(maxArea([1, 1])); // Expected output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Expected output: 16
console.log(maxArea([1, 2, 1])); // Expected output: 2

// A4. 3Sum
function threeSum(nums) {
    let results = [];

    // Sort the array
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate elements for the second and third elements
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move both pointers
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return results;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Expected output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // Expected output: []
console.log(threeSum([0, 0, 0, 0])); // Expected output: [[0, 0, 0]]
console.log(threeSum([-1, 0, 1, 1, -1, -4])); // Expected output: [[-1, -1, 2], [-1, 0, 1]]

// A5. Group Anagrams
function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        // Sort the string to form the key
        let sortedStr = str.split("").sort().join("");

        // If the key is not in the map, initialize it with an empty array
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }

        // Add the original string to the array for this key
        map.get(sortedStr).push(str);
    }

    // Convert the map values to an array of arrays
    return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

console.log(groupAnagrams([""]));
// Expected output: [['']]

console.log(groupAnagrams(["a"]));
// Expected output: [['a']]

console.log(groupAnagrams(["a", "b", "c", "a", "b", "c"]));
// Expected output: [['a', 'a'], ['b', 'b'], ['c', 'c']]
