class Node {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

let caterpillarNode = new Node("caterpillar");
let beeNode = new Node("bee", caterpillarNode);
let antNode = new Node("ant", beeNode);

// {currentNode}.next.val gets the next Node's value 
console.log(`Ant Node Val: ${antNode.val}, Next: ${antNode.next.val} Node`);
console.log(`Bee Node Val: ${beeNode.val}, Next: ${beeNode.next.val} Node`);
console.log(`Caterpillar Node Val: ${caterpillarNode.val}, Next: ${caterpillarNode.next}`);