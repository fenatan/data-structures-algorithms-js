 /**
 * This class is a Queue data structure based on JavaScript Array. This data structure is a
 * FIFO implmentation, in other words, the first element to enter is the first to exit.
 */
class QueueArray {
   /**
   * Creates a QUEUE
   * @example
   * const { QueueArray } = require('data-structures-algorithms-js');
   * const queue = new QueueArray();
   */
  constructor() {
    this._queue = [];
  }

  /**
   * Adds a element to the end of the Queue
   * @param {*} element Element passed to insert
   * @example
   * const { QueueArray } = require('data-structures-algorithms-js');
   * const queue = new QueueArray();
   *
   * queue.push(5); //inserts 5 to the end of the queue
   */
  push(element) {
    this._queue.push(element);
  }

   /**
   * Removes the first element from the Queue
   * @example
   * const { QueueArray } = require('data-structures-algorithms-js');
   * const queue = new QueueArray();
   *
   * queue.push(3);
   * queue.push(9);
   *
   * queue.pop(); //removes number 9
   */
  pop() {
    if (this._queue.length === 0) return undefined;

    this._queue.shift();
  }

  /**
   * Returns the first element of the Queue
   * @returns {*|undefined} Returns the element on the front or undefined if queue is empty
   * @example
   * const { QueueArray } = require('data-structures-algorithms-js');
   * const queue = new QueueArray();
   *
   * queue.front();// returns undefined
   *
   * queue.push(23);
   * queue.push(89);
   *
   * queue.front(); //returns 23
   */
  front() {
    if (this._queue.length === 0) return undefined;
    return this._queue[0];
  }

  /**
   * Returns the last element of the Queue
   * @returns {*|undefined} Returns the element on the back or undefined if queue is empty
   * @example
   * const { QueueArray } = require('data-structures-algorithms-js');
   * const queue = new QueueArray();
   *
   * queue.back();// returns undefined
   *
   * queue.push(23);
   * queue.push(89);
   *
   * queue.back(); //returns 89
   */
  back() {
    if (this._queue.length === 0) return undefined;
    return this._queue[this._queue.length - 1];
  }

  /**
   * Returns if the Queue is empty
   * @returns {Boolean}
   * @example
   * const { QueueArray } = require('data-structures-algorithms-js');
   * const queue = new QueueArray();
   *
   * queue.isEmpty(); // returns true;
   *
   * queue.push(23);
   *
   * queue.isEmpty(); //returns false;
   */
  isEmpty() {
    return this._queue.length === 0;
  }

  /**
   * Returns the size of the Queue
   * @returns {Number} The number of elements in the Queue
   * @example
   * const { QueueArray } = require('data-structures-algorithms-js');
   * const queue = new QueueArray();
   *
   * queue.size(); // returns 0;
   *
   * queue.push(8);
   *
   * queue.size(); //returns 1;
   */
  size() {
    return this._queue.length;
  }

  /**
   * Resets the Queue
   * @example
   * const { QueueArray } = require('data-structures-algorithms-js');
   * const queue = new QueueArray();
   *
   * queue.push(15);
   *
   * queue.clear(); // now queue is empty
   */
  clear() {
    this._queue = [];
  }
}

module.exports = QueueArray;
