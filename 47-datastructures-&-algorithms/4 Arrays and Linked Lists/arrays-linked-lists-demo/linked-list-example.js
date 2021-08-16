class LinkedList {
    constructor() {
        this.head = null
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
// console.log(insects.head);
// insects.traverse();

let dragonflyNode = new Node("dragonfly", antNode);
insects.head = dragonflyNode
// console.log(insects.head);
insects.traverse();

console.log(insects.search('burger'));
console.log(insects.search('caterpillar'));
