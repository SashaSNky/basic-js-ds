const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(data){
    this.value = data;
    this.next = null;
  } 
};

class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
  };
  
  getUnderlyingList() {
      return this.first;
  }

  enqueue(value) {
    var obj;
    if (!this.first){
      this.first = new Node(value);
    } else {
      obj = this.first;
      while (obj.next) {
        obj = obj.next;
      }
      obj.next =new Node(value);
    }
  
    this.size += 1;
    return new Node(value);;
  }

  dequeue() {
    let cur = this.first;
    this.first = this.first.next;
    this.size --;
    return cur.value;
  }

}

module.exports = {
  Queue
};
