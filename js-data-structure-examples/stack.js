// (Last In First Out - Last in in from the front of the list 
// is the first one to get out)

/** Node: node for a stack. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** Stack: chained-together nodes where you can
   *  remove from the top or add to the top. */
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    /** push(val): add new value to end of the stack. Returns undefined. */
  
    push(val) {
      let newNode = new Node(val);
      if(!this.first) {
        this.first = newNode;
        this.last = newNode;
      }
      // Add 1 to length
      this.size += 1;
      // Point current tail to new tail/ new node
      this.last.next = newNode;
      // Update tail and set it to newNode
      this.last = newNode;
    }
  
    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty. */
  
    pop() {
      if(this.isEmpty()) throw 'Stack is empty';
      let currentNode = this.first;
      let newTail;
      while(currentNode) {
        if(currentNode.next === this.last) newTail = currentNode;
        currentNode = currentNode.next;
      }
      // Copies old tail to return it's value.
      let copiedOldTail = this.last;
      // Update current tail to new tail.
      this.last = newTail;
      // Point new tail next to null
      this.last.next = null;
      return copiedOldTail;
    }
    
    /** traverse(): logs all Node values from Stack. */
    traverse() {
      let currentNode = this.first;
      while(currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
      }
    }
  
    /** peek(): return the value of the first node in the stack. */
  
    peek() {
      return this.first
    }
  
    /** isEmpty(): return true if the stack is empty, otherwise false */
  
    isEmpty() {
      return this.size === 0 ? true : false; 
    }
  }
  
  let cars = new Stack();
  cars.push('Lightning McQueen');
  cars.push('Mater');
  cars.push('Doc Hudson');
  cars.push('Sally Carrera');
  // cars.traverse();
  console.log(cars.pop());
  cars.traverse();
