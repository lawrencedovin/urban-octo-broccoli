// Accessing the head: O(1)
// Accessing the tail: O(n)
// Accessing a middle node: O(n)
// Inserting / Removing the head: O(1)
// Inserting / Removing the tail: O(n) to access + O(1)
// Inserting / Remove the middle node: O(n) to access + O(1)
// Searching for a value: O(n)

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    traverse() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    search(val) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.val === val) return true;
            currentNode = currentNode.next;
        }
        return false;
    }
    append(val) {
        const newNode = new Node(val); 
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // Current Tail Node sets its next to New Node
        this.tail.next = newNode;
        // New Tail is set to New Node
        this.tail = newNode;
    }
}

class Node {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

// antNode -> beeNode -> caterpillarNode
let caterpillarNode = new Node("caterpillar");
let beeNode = new Node("bee", caterpillarNode);
let antNode = new Node("ant", beeNode);

// antNode is at the Head
let insects = new LinkedList();
insects.head = antNode;
insects.tail = caterpillarNode;

insects.append("dragonfly");
insects.traverse();