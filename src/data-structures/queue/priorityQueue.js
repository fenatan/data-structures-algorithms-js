/**
 * This class is a Priority Queue implementation. This data-structure allows add and remove elements
 * with priorities. The queue is always ordered by the highest priority.
 */
class PriorityQueue {
  /**
   * Creates a PRIORITY-QUEUE data-structure
   * @example
   * const { PriorityQueue } = require('data-structures-algorithms-js');
   * const pq = new PriorityQueue();
   */
  constructor() {
    this._priorityQueue = [];
  }
  /**
   * Adds a element at the Priority-Queue
   * @param {*} element Element passed to insert
   * @param {Integer} priority Priority can be any integer number 
   * @example
   * const { PriorityQueue } = require('data-structures-algorithms-js');
   * const pq = new PriorityQueue();
   *
   * pq.push(10, 2); //inserts element 10 with priority 2
   */
  push(element, priority = 0) {
    element = [element, priority]
    if (this.size() === 0) {
      this._priorityQueue.push(element);
    } else {
      let flag = false;

      for (let i = 0; i < this.size(); i++) {
        if (element[1] > this._priorityQueue[i][1]) {
          this._priorityQueue.splice(i, 0, element);
          flag = true;
          break;
        }
      }

      if (!flag) this._priorityQueue.push(element);
    }
  }
   /**
   * removes the first element at the Priority Queue
   * @example
   * const { PriorityQueue } = require('data-structures-algorithms-js');
   * const pq = new PriorityQueue();
   *
   * pq.push(3, 8);
   * pq.push(9, 10);
   *
   * pq.pop(); //removes number 9 from the Priority Queue
   */
  pop() {
    if (this.size() === 0) return undefined;
    return this._priorityQueue.shift()[0];
  }
  /**
   * Returns the element at the back of Priority Queue
   * @returns {*} The element at the back
   * @example
   * const { PriorityQueue } = require('data-structures-algorithms-js');
   * const pq = new PriorityQueue();
   *
   * pq.push(6); 
   * pq.push(3, -2);
   *
   * pq.back(); //returns 3;
   */
  back() {
    if (this.size() === 0) return undefined;
    return this._priorityQueue[this.size() - 1][0];
  }
  /**
   * Returns the element at the front of the Priority Queue
   * @returns {*} The element at the front
   * @example
   * const { PriorityQueue } = require('data-structures-algorithms-js');
   * const pq = new PriorityQueue();
   *
   * pq.push(6); 
   * pq.push(3);
   *
   * pq.front(); //returns 6;
   */
  front() {
    if (this.size() === 0) return undefined;
    return this._priorityQueue[0][0];
  }
  /**
   * Returns the size of the Priority Queue
   * @returns {Number} The number of elements in the Priority Queue
   * @example
   * const { PriorityQueue } = require('data-structures-algorithms-js');
   * const pq = new PriorityQueue();
   *
   * pq.size(); // returns 0;
   *
   * pq.push(8, 10);
   *
   * pq.size(); //returns 1;
   */
  size() {
    return this._priorityQueue.length;
  }
  /**
   * Returns if the Priority Queue is empty
   * @returns {Boolean}
   * @example
   * const { PriorityQueue } = require('data-structures-algorithms-js');
   * const pq = new PriorityQueue();
   *
   * pq.isEmpty(); // returns true;
   *
   * pq.push(23, 9);
   *
   * pq.isEmpty(); //returns false;
   */
  isEmpty() {
    return this.size() === 0;
  }
  /**
   * Resets the the Priority Queue
   * @example
   * const { PriorityQueue } = require('data-structures-algorithms-js');
   * const pq = new PriorityQueue();
   *
   * pq.push(15);
   *
   * pq.clear(); // now Priority Queue is empty
   */
  clear() {
    this._priorityQueue = [];
  }
}

module.exports = PriorityQueue;
