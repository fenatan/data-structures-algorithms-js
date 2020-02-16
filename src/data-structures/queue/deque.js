/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
// Simulation of a Dequeue using JavaScript Object

class Deque {
  constructor() {
    this._backIndex = 0;
    this._frontIndex = 0;
    this._deque = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this._frontIndex > 0) {
      this._frontIndex--;
      this._deque[this._frontIndex] = element;
    } else {
      for (let i = this._backIndex; i > 0; i--)
        this._deque[i] = this._deque[i - 1];
      this._backIndex++;
      this._frontIndex = 0;
      this._deque[0] = element;
    }
  }

  addBack(element) {
    this._deque[this._backIndex] = element;
    this._backIndex++;
  }

  removeFront() {
    if (this.size() === 0) return undefined;

    const removed = this._deque[this._frontIndex];
    delete this._deque[this._frontIndex];
    this._frontIndex++;
    return removed;
  }

  removeBack() {
    if (this.size() === 0) return undefined;

    const removed = this._deque[this._backIndex - 1];
    delete this._deque[this._backIndex - 1];
    this._backIndex--;
    return removed;
  }

  front() {
    if (this.size() === 0) return undefined;
    return this._deque[this._frontIndex];
  }

  back() {
    if (this.size() === 0) return undefined;
    return this._deque[this._backIndex - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this._backIndex - this._frontIndex;
  }

  clear() {
    this._backIndex = 0;
    this._frontIndex = 0;
    this._deque = {};
  }
}

module.exports = Deque;
