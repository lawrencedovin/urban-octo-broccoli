class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root=null) {
        this.root = root;
    }

    find(val) {
        let current = this.root;
        while(current) {
            console.log(current.val);
            if(current.val === val) return `Found: ${val}`;
            current = val < current.val
                      ? current.left
                      : current.right
        }
    }
}

const E = new Node('E');
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const F = new Node('F');
const G = new Node('G');

// Left side
E.left = B;
B.left = A;
B.right = D;

// Right side
E.right = G;
G.left = F;

const tree = new BinarySearchTree(E);
console.log(tree.find('D'));