/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
// Simulation of a Queue behaviour using JavaScript Object
// FIFO - First In - First Out
class Queue {
  constructor() {
    this._count = 0;
    this._leastId = 0;
    this._queue = {};
  }

  // insert a element
  push(element) {
    this._queue[this._count] = element;
    this._count++;
  }

  // remove next element
  pop() {
    if (this.size() === 0) return undefined;

    const removed = this._queue[this._leastId];
    delete this._queue[this._leastId];
    this._leastId++;
    return removed;
  }

  // Access next element
  front() {
    if (this.size() === 0) return undefined;
    return this._queue[this._leastId];
  }

  // Access last element
  back() {
    if (this.size() === 0) return undefined;
    return this._queue[this._count - 1];
  }

  // test if queue is empty
  isEmpty() {
    return this.size() === 0;
  }

  // return size of queue
  size() {
    return this._count - this._leastId;
  }

  // Clear de queue
  clear() {
    this._queue = {};
    this._count = 0;
    this._leastId = 0;
  }
}

module.exports = Queue;
