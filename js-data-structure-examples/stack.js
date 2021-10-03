// (Last In First Out - Last one in from the front of the list 
// is the first one to get out)

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    traverse() {
        let currentNode = this.first;
        while(currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        // Current Last is pointed to new node
        this.last.next = newNode;
        // Last is updated to new node
        this.last = newNode;
        // Update size
        this.size++;
    }

    pop() {
        // traverse and if this.next === this.tail then store that value 
        // update that to the new tail. make that value also point next to null.
        let currentNode = this.first;
        let newTail;
        while(currentNode) {
            if(currentNode.next === this.last) newTail = currentNode;
            currentNode = currentNode.next;
        }
        console.log(`${this.last.val} has been removed.`);
        this.last = newTail;
        this.last.next = null;
    }
}

class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}

// antNode -> beeNode -> caterpillarNode
let caterpillarNode = new Node("caterpillar");
let beeNode = new Node("bee", caterpillarNode);
let antNode = new Node("ant", beeNode);

console.log(beeNode);

// antNode is at the Head
let insects = new Stack();
insects.first = antNode;
insects.last = caterpillarNode;

insects.push("dragonfly");
insects.push("beetle");
insects.traverse();

console.log("================after pop====================");
insects.pop("beetle");
insects.pop("ant");
insects.traverse();
