// Day 17. Data Structures

// A1. Linked List

// Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Implement a LinkedList class with methods to add a node to the end, remove a node from the end, display all nodes.
class LinkedList {
    constructor() {
        this.head = null; // The head of the linked list
    }

    // Method to add a node to the end of the linked list
    addNode(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            // If the list is empty, set the new node as the head
            this.head = newNode;
        } else {
            // Otherwise, traverse to the end and add the new node
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to remove a node from the end of the linked list
    removeNode() {
        if (this.head === null) {
            // If the list is empty, nothing to remove
            return;
        } else if (this.head.next === null) {
            // If there is only one node, remove it
            this.head = null;
        } else {
            // Traverse to the second-to-last node
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            // Remove the last node
            current.next = null;
        }
    }

    // Method to display all nodes in the linked list
    displayNodes() {
        let current = this.head;
        let result = [];
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

// Example usage

const linkedList = new LinkedList();

// Adding nodes
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);

// Displaying all nodes
console.log("Linked list after adding nodes:");
linkedList.displayNodes(); // Expected output: 1 -> 2 -> 3

// Removing a node
linkedList.removeNode();

// Displaying all nodes after removal
console.log("Linked list after removing a node:");
linkedList.displayNodes(); // Expected output: 1 -> 2

// Adding more nodes
linkedList.addNode(4);
linkedList.addNode(5);

// Displaying all nodes again
console.log("Linked list after adding more nodes:");
linkedList.displayNodes(); // Expected output: 1 -> 2 -> 4 -> 5

// A2. Stack

// Implement a Stack class with methods push (add element), pop(remove element), and peek(view the top element)
class Stack {
    constructor() {
        this.stk = [];
    }

    push(value) {
        this.stk.push(value);
    }

    pop() {
        if (this.stk.length === 0) {
            throw new Error("Stack is empty. Cannot pop an element.");
        }
        return this.stk.pop();
    }

    peek() {
        if (this.stk.length === 0) {
            throw new Error("Stack is empty. Cannot peek an element.");
        }
        return this.stk[this.stk.length - 1];
    }
    isEmpty() {
        return this.stk.length === 0;
    }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(5);

console.log(stack);
console.log("Top element:", stack.peek()); // Expected output: 5

stack.pop();

console.log("Top element:", stack.peek());
console.log(stack);
// stack.push(2);

//E2.
/*
class Stack {
    constructor() {
        this.items = []; // Initialize an empty array to hold stack elements
    }

    // Method to add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Method to remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty. Cannot pop an element.");
        }
        return this.items.pop();
    }

    // Method to view the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty. Cannot peek an element.");
        }
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the size of the stack
    size() {
        return this.items.length;
    }

    // Method to display all elements in the stack
    display() {
        console.log(this.items.join(' <- '));
    }
}

// Example usage

const stack = new Stack();

// Adding elements to the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Viewing the top element
console.log("Top element:", stack.peek()); // Expected output: 3

// Displaying all elements in the stack
console.log("Stack contents:");
stack.display(); // Expected output: 1 <- 2 <- 3

// Removing the top element
console.log("Removed element:", stack.pop()); // Expected output: 3

// Displaying all elements after removal
console.log("Stack contents after pop:");
stack.display(); // Expected output: 1 <- 2

// Viewing the top element after removal
console.log("Top element after pop:", stack.peek()); // Expected output: 2

// Checking if the stack is empty
console.log("Is stack empty?", stack.isEmpty()); // Expected output: false

// Removing all elements
stack.pop();
stack.pop();

// Checking if the stack is empty after removing all elements
console.log("Is stack empty after popping all elements?", stack.isEmpty()); // Expected output: true
*/

// Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
// Function to reverse a string using a stack
function reverseString(str) {
    const stack = new Stack();

    // Push all characters of the string onto the stack
    for (const char of str) {
        stack.push(char);
    }

    // Pop all characters from the stack and build the reversed string
    let reversedStr = "";
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString);

// A3. Queue

// Implement a Queue class with methods enqueue(add element), dequeue(remove element), add front(view the first element).
class Queue {
    constructor() {
        this.items = []; // Initialize an empty array to hold queue elements
    }

    // Method to add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty. Cannot dequeue an element.");
        }
        return this.items.shift(); // Removes and returns the first element
    }

    // Method to view the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty. Cannot view the front element.");
        }
        return this.items[0]; // Returns the first element
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the size of the queue
    size() {
        return this.items.length;
    }

    // Method to display all elements in the queue
    display() {
        console.log(this.items.join(" <- "));
    }
}

// Example usage

const queue = new Queue();

// Adding elements to the queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);
console.log("Top element:", queue.front()); // Expected output: 1

queue.dequeue();

console.log("Top element:", queue.front());
console.log(queue);

// Use the Queue class to stimulate a simple printer queue where print jobs are added to the queue and processed in order.
// Simulate a printer queue
class PrinterQueue {
    constructor() {
        this.queue = new Queue(); // Create a new Queue instance
    }

    // Method to add a print job to the queue
    addPrintJob(job) {
        console.log(`Adding print job: ${job}`);
        this.queue.enqueue(job);
    }

    // Method to process the next print job in the queue
    processPrintJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs in the queue.");
            return;
        }
        const job = this.queue.dequeue();
        console.log(`Processing print job: ${job}`);
    }

    // Method to view the next print job without processing it
    viewNextJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs in the queue.");
            return;
        }
        console.log(`Next print job: ${this.queue.front()}`);
    }

    // Method to display all print jobs in the queue
    displayJobs() {
        console.log("Current print jobs in the queue:");
        this.queue.display();
    }
}

const printerQueue = new PrinterQueue();

// Adding print jobs
printerQueue.addPrintJob("Document1.pdf");
printerQueue.addPrintJob("Image2.png");
printerQueue.addPrintJob("Presentation.pptx");
// Display all print jobs
printerQueue.displayJobs(); // Expected output: Document1.pdf <- Image2.png <- Presentation.pptx

// View the next job to be processed
printerQueue.viewNextJob(); // Expected output: Document1.pdf

// Process the print jobs
printerQueue.processPrintJob(); // Expected output: Processing print job: Document1.pdf
printerQueue.processPrintJob(); // Expected output: Processing print job: Image2.png

// Display remaining print jobs
printerQueue.displayJobs(); // Expected output: Presentation.pptx

// Process the remaining print job
printerQueue.processPrintJob(); // Expected output: Processing print job: Presentation.pptx

// Try to process another job when the queue is empty
printerQueue.processPrintJob(); // Expected output: No print jobs in the queue.

// A4. Binary Tree

// Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value; // Holds the value of the node
        this.left = left; // Points to the left child node (default is null)
        this.right = right; // Points to the right child node (default is null)
    }
}

// Implement a Binary Tree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null; // Initialize the root of the binary tree
    }

    // Method to insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
        } else {
            // Otherwise, insert the new node in the correct position
            this._insertRecursively(this.root, newNode);
        }
    }

    // Helper method to insert a node recursively
    _insertRecursively(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            // Insert in the left subtree
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this._insertRecursively(currentNode.left, newNode);
            }
        } else {
            // Insert in the right subtree
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this._insertRecursively(currentNode.right, newNode);
            }
        }
    }

    // Method to perform an in-order traversal and display the nodes
    inOrderTraversal() {
        this._inOrderTraversalRecursively(this.root);
    }

    // Helper method for in-order traversal
    _inOrderTraversalRecursively(node) {
        if (node !== null) {
            this._inOrderTraversalRecursively(node.left);
            console.log(node.value);
            this._inOrderTraversalRecursively(node.right);
        }
    }
}

// Example usage

const binaryTree = new BinaryTree();

// Inserting values into the binary tree
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

// Perform in-order traversal to display nodes
console.log("In-order traversal of the binary tree:");
binaryTree.inOrderTraversal(); // Expected output: 2 3 4 5 6 7 8

// A5. Graph(Optional)

// Implement a Graph class with methods to add vertices, and edges, and perform a breadth-first-search(BFS)
class Graph {
    constructor() {
        this.adjacencyList = new Map(); // Map to hold the adjacency list of the graph
    }

    // Method to add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Method to add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // Assuming an undirected graph
    }

    // Method to perform breadth-first search (BFS) starting from a vertex
    bfs(startVertex) {
        if (!this.adjacencyList.has(startVertex)) {
            throw new Error("Start vertex not found in the graph.");
        }

        const visited = new Set();
        const queue = [];
        const result = [];

        queue.push(startVertex);
        visited.add(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift(); // Dequeue a vertex from the queue
            result.push(vertex); // Add the vertex to the result list

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor); // Enqueue the neighbor
                    visited.add(neighbor); // Mark the neighbor as visited
                }
            }
        }

        return result;
    }

    // Method to perform BFS to find the shortest path between two vertices
    shortestPath(startVertex, endVertex) {
        if (
            !this.adjacencyList.has(startVertex) ||
            !this.adjacencyList.has(endVertex)
        ) {
            throw new Error("One or both vertices not found in the graph.");
        }

        const visited = new Set();
        const queue = [];
        const parent = new Map(); // To reconstruct the path

        queue.push(startVertex);
        visited.add(startVertex);
        parent.set(startVertex, null); // Starting point has no parent

        while (queue.length > 0) {
            const vertex = queue.shift();

            if (vertex === endVertex) {
                return this._reconstructPath(parent, startVertex, endVertex);
            }

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                    parent.set(neighbor, vertex); // Set parent for path reconstruction
                }
            }
        }

        return []; // Return an empty array if no path found
    }

    // Helper method to reconstruct the path from start to end
    _reconstructPath(parent, startVertex, endVertex) {
        const path = [];
        let current = endVertex;

        while (current !== null) {
            path.unshift(current);
            current = parent.get(current);
        }

        if (path[0] === startVertex) {
            return path;
        } else {
            return []; // Return empty if the path does not start from the startVertex
        }
    }

    // Method to display the adjacency list
    display() {
        for (const [vertex, neighbors] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${neighbors.join(", ")}`);
        }
    }
}

// Example usage

const graph = new Graph();

// Adding vertices and edges
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

// Display the adjacency list
console.log("Adjacency List:");
graph.display();

// Perform BFS starting from vertex 'A'
console.log("BFS starting from vertex 'A':");
const bfsResult = graph.bfs("A");
console.log(bfsResult); // Expected output: [ 'A', 'B', 'C', 'D', 'E' ]

// Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
// Find the shortest path from 'A' to 'E'
console.log("Shortest path from 'A' to 'E':");
const shortestPath = graph.shortestPath("A", "E");
console.log(shortestPath); // Expected output: [ 'A', 'C', 'E' ]

// F1. Write a script that implements a linked list with methods to add, remove, and display nodes.

// F2. Create a script that implements a stack and uses it to reverse a string.

// F3. Write a script that implements a queue and simulates a printer queue.

// F4. Create a script that implements a binary tree with insertion and in-order traversal methods.

// F5. Write a script that implements a graph and performs breadth-first search (optional).
