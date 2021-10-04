// (First In First Out - First in from the front of the list 
// is the first one to get out)

/** Node: node for a queue. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** Queue: chained-together nodes where you can
   *  remove from the front or add to the back. */
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    /** traverse(): logs all Node values from Queue. */
  
    traverse() {
      let currentNode = this.first;
      while(currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
      }
    }
  
    /** enqueue(val): add new value to end of the queue. Returns undefined. */
  
    enqueue(val) {
      let newNode = new Node(val);
      if(!this.first) {
        this.first = newNode;
        this.last = newNode;
      }
      this.size += 1;
      // Point current tail to new tail
      this.last.next = newNode;
      // The update to new tail
      this.last = newNode;
    }
  
    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */
  
    dequeue() {
    // Remove Head from start
    // Get following Node after head and make that into the new Head
      if(this.isEmpty()) throw 'Queue is empty';
      let newHead = this.first.next;
      this.first = newHead;
      this.size -= 1;
    }
  
    /** peek(): return the value of the first node in the queue. */
  
    peek() {
      return this.first;
    }
  
    /** isEmpty(): return true if the queue is empty, otherwise false */
  
    isEmpty() {
      return this.size === 0 ? true : false;
    }
  }
  
  let fruits = new Queue();
  
  console.log(fruits.dequeue());
  
  // fruits.enqueue('tomato');
  // fruits.enqueue('mango');
  // fruits.enqueue('apple');
  
  // console.log(fruits.isEmpty());
  // fruits.dequeue();
  // fruits.traverse();