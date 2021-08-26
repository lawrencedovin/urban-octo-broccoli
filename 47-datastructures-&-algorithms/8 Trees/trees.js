class Node {
    constructor(val, children=[]) {
        this.val = val;
        this.children = children;
    }
}

let pizzaroll = new Node('pizzaroll');
let pizza = new Node('pizza');
let roll = new Node('roll');
pizzaroll.children.push([pizza, roll]);

console.log(pizzaroll);
console.log(pizzaroll.children);