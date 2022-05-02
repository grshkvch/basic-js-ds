const { ListNode } = require('../extensions/list-node.js');

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
class Queue {

  constructor() {
    this.head = null
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(data) {
    let current = this.head;
    if (this.head === null) {
      this.head = new ListNode(data);
    } else {
       while (current.next) {
         current = current.next;
       }
       current.next =  new ListNode(data)   ;
    }
  }

  dequeue() {
    let current = this.head;
    this.head = this.head.next;
    return current.value;
  }
}

module.exports = {
  Queue
};
