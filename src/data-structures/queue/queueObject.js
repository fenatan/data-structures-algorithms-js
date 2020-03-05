 /**
 * This class is a Queue data structure based on JavaScript Object. This data structure is a
 * FIFO implmentation, in other words, the first element to enter is the first to exit.
 */
class Queue {
  /**
   * Creates a QUEUE
   * @example
   * const { Queue } = require('data-structures-algorithms-js');
   * const queue = new Queue();
   */
  constructor() {
    this._count = 0;
    this._leastId = 0;
    this._queue = {};
  }

  /**
   * Adds a element to the end of the Queue
   * @param {*} element Element passed to insert
   * @example
   * const { Queue } = require('data-structures-algorithms-js');
   * const queue = new Queue();
   *
   * queue.push(5); //inserts 5 to the end of the queue
   */
  push(element) {
    this._queue[this._count] = element;
    this._count++;
  }

  /**
   * Removes the first element from the Queue
   * @example
   * const { Queue } = require('data-structures-algorithms-js');
   * const queue = new Queue();
   *
   * queue.push(3);
   * queue.push(9);
   *
   * queue.pop(); //removes number 9
   */
  pop() {
    if (this.size() === 0) return undefined;

    const removed = this._queue[this._leastId];
    delete this._queue[this._leastId];
    this._leastId++;
    return removed;
  }

  /**
   * Returns the first element of the Queue
   * @returns {*|undefined} Returns the element on the front or undefined if queue is empty
   * @example
   * const { Queue } = require('data-structures-algorithms-js');
   * const queue = new Queue();
   *
   * queue.front();// returns undefined
   *
   * queue.push(23);
   * queue.push(89);
   *
   * queue.front(); //returns 23
   */
  front() {
    if (this.size() === 0) return undefined;
    return this._queue[this._leastId];
  }

  /**
   * Returns the last element of the Queue
   * @returns {*|undefined} Returns the element on the back or undefined if queue is empty
   * @example
   * const { Queue } = require('data-structures-algorithms-js');
   * const queue = new Queue();
   *
   * queue.back();// returns undefined
   *
   * queue.push(23);
   * queue.push(89);
   *
   * queue.back(); //returns 89
   */
  back() {
    if (this.size() === 0) return undefined;
    return this._queue[this._count - 1];
  }

   /**
   * Returns if the Queue is empty
   * @returns {Boolean}
   * @example
   * const { Queue } = require('data-structures-algorithms-js');
   * const queue = new Queue();
   *
   * queue.isEmpty(); // returns true;
   *
   * queue.push(23);
   *
   * queue.isEmpty(); //returns false;
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Returns the size of the Queue
   * @returns {Number} The number of elements in the Queue
   * @example
   * const { Queue } = require('data-structures-algorithms-js');
   * const queue = new Queue();
   *
   * queue.size(); // returns 0;
   *
   * queue.push(8);
   *
   * queue.size(); //returns 1;
   */
  size() {
    return this._count - this._leastId;
  }

  /**
   * Resets the Queue
   * @example
   * const { Queue } = require('data-structures-algorithms-js');
   * const queue = new Queue();
   *
   * queue.push(15);
   *
   * queue.clear(); // now queue is empty
   */
  clear() {
    this._queue = {};
    this._count = 0;
    this._leastId = 0;
  }
}

module.exports = Queue;
