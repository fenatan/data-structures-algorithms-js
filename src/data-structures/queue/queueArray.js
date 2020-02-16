/* eslint-disable no-underscore-dangle */
// Simulation of a Queue behaviour using JavaScript Array
// FIFO - First In - First Out
class Queue {
  constructor() {
    this._queue = [];
  }

  // insert a element
  push(element) {
    this._queue.push(element);
  }

  // remove next element
  pop() {
    if (this._queue.length === 0) return undefined;

    this._queue.shift();
  }

  // Access next element
  front() {
    if (this._queue.length === 0) return undefined;
    return this._queue[0];
  }

  // Access last element
  back() {
    if (this._queue.length === 0) return undefined;
    return this._queue[this._queue.length - 1];
  }

  // test if queue is empty
  isEmpty() {
    return this._queue.length === 0;
  }

  // return size of queue
  size() {
    return this._queue.length;
  }

  // Clear de queue
  clear() {
    this._queue = [];
  }
}

module.exports = Queue;
