// Day 23. LeetCode Hard

// A1. Median of 2 sorted arrays
function findMedianSortedArrays(nums1, nums2) {
    let A = nums1;
    let B = nums2;

    // Ensure A is the smaller array
    if (A.length > B.length) {
        [A, B] = [B, A];
    }

    let m = A.length;
    let n = B.length;
    let imin = 0;
    let imax = m;
    let halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;

        if (i < m && B[j - 1] > A[i]) {
            // i is too small
            imin = i + 1;
        } else if (i > 0 && A[i - 1] > B[j]) {
            // i is too big
            imax = i - 1;
        } else {
            // i is perfect
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = B[j - 1];
            } else if (j === 0) {
                maxLeft = A[i - 1];
            } else {
                maxLeft = Math.max(A[i - 1], B[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === m) {
                minRight = B[j];
            } else if (j === n) {
                minRight = A[i];
            } else {
                minRight = Math.min(A[i], B[j]);
            }

            return (maxLeft + minRight) / 2;
        }
    }

    throw new Error("Input arrays are not sorted or not valid.");
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Expected output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Expected output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Expected output: 0
console.log(findMedianSortedArrays([], [1])); // Expected output: 1

// A2. Merge k sorted lists
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    const minHeap = new MinHeap((a, b) => a.val - b.val);

    // Initialize the heap with the head of each list
    for (let list of lists) {
        if (list) {
            minHeap.insert(list);
        }
    }

    let dummy = new ListNode(0);
    let current = dummy;

    // Merge the lists
    while (!minHeap.isEmpty()) {
        let node = minHeap.remove();
        current.next = node;
        current = current.next;

        if (node.next) {
            minHeap.insert(node.next);
        }
    }

    return dummy.next;
}

class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    insert(node) {
        this.heap.push(node);
        this._heapifyUp(this.heap.length - 1);
    }

    remove() {
        if (this.heap.length === 0) return null;
        const root = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._heapifyDown(0);
        }
        return root;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (
            index > 0 &&
            this.compare(this.heap[index], this.heap[parentIndex]) < 0
        ) {
            [this.heap[index], this.heap[parentIndex]] = [
                this.heap[parentIndex],
                this.heap[index],
            ];
            this._heapifyUp(parentIndex);
        }
    }

    _heapifyDown(index) {
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;
        let smallest = index;

        if (
            leftIndex < this.heap.length &&
            this.compare(this.heap[leftIndex], this.heap[smallest]) < 0
        ) {
            smallest = leftIndex;
        }
        if (
            rightIndex < this.heap.length &&
            this.compare(this.heap[rightIndex], this.heap[smallest]) < 0
        ) {
            smallest = rightIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [
                this.heap[smallest],
                this.heap[index],
            ];
            this._heapifyDown(smallest);
        }
    }
}

// Test cases
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

// Helper function to create a linked list from an array
function createList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

const list1 = createList([1, 4, 5]);
const list2 = createList([1, 3, 4]);
const list3 = createList([2, 6]);

const mergedList = mergeKLists([list1, list2, list3]);
printList(mergedList); // Expected output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// A3. Trapping Rain water
function trap(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let left_max = 0;
    let right_max = 0;
    let water_trapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                water_trapped += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                water_trapped += right_max - height[right];
            }
            right--;
        }
    }

    return water_trapped;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expected output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Expected output: 9
console.log(trap([1, 0, 2])); // Expected output: 1
console.log(trap([0, 1, 0, 1, 0, 1, 0])); // Expected output: 3

// A4. N-Queens
function solveNQueens(n) {
    let results = [];
    let columns = new Set();
    let diagonals1 = new Set();
    let diagonals2 = new Set();
    let board = Array.from({ length: n }, () => Array(n).fill("."));

    function backtrack(row) {
        if (row === n) {
            results.push(board.map((r) => r.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (
                columns.has(col) ||
                diagonals1.has(row - col) ||
                diagonals2.has(row + col)
            ) {
                continue;
            }

            // Place queen
            board[row][col] = "Q";
            columns.add(col);
            diagonals1.add(row - col);
            diagonals2.add(row + col);

            // Recur for the next row
            backtrack(row + 1);

            // Remove queen and backtrack
            board[row][col] = ".";
            columns.delete(col);
            diagonals1.delete(row - col);
            diagonals2.delete(row + col);
        }
    }

    backtrack(0);
    return results;
}

// Test cases
console.log(solveNQueens(4));
// Expected output: [
//    [".Q..", "...Q", "Q...", "..Q."],
//    ["..Q.", "Q...", "...Q", ".Q.."]
// ]

console.log(solveNQueens(8));
// Expected output: Numerous solutions, including:
// ["..Q......", "....Q....", "......Q..", "Q........", ".Q.......", "....Q...", "...Q....", "......Q."]
// (Exact output varies, but each board represents a valid solution)

// A5. Word Ladder
function ladderLength(beginWord, endWord, wordList) {
    // Convert the wordList to a set for O(1) lookups
    const wordSet = new Set(wordList);

    // If the endWord is not in the wordList, no solution exists
    if (!wordSet.has(endWord)) return 0;

    // Initialize BFS queue with the beginWord
    let queue = [[beginWord, 1]];
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [currentWord, length] = queue.shift();

        // Try all possible single-letter transformations
        for (let i = 0; i < currentWord.length; i++) {
            for (
                let charCode = "a".charCodeAt(0);
                charCode <= "z".charCodeAt(0);
                charCode++
            ) {
                const newWord =
                    currentWord.substring(0, i) +
                    String.fromCharCode(charCode) +
                    currentWord.substring(i + 1);

                // If newWord is the endWord, return the length + 1
                if (newWord === endWord) return length + 1;

                // If newWord is valid and not visited, add it to the queue
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    queue.push([newWord, length + 1]);
                    visited.add(newWord);
                }
            }
        }
    }

    // If no transformation sequence is found
    return 0;
}

// Test cases
console.log(
    ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // Expected output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Expected output: 0
console.log(ladderLength("a", "c", ["a", "b", "c"])); // Expected output: 2
console.log(
    ladderLength("qa", "sq", ["si", "go", "se", "qa", "si", "sq", "go", "se"])
); // Expected output: 5
