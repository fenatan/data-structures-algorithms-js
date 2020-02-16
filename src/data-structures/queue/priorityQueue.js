/* eslint-disable no-underscore-dangle */
class PriorityQueue {
  constructor() {
    this._priorityQueue = [];
  }

  push(element) {
    // Should pass an Array [element, priority] - priority must be a INT
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

  // remove the first element in the priorityQueue
  pop() {
    if (this.size() === 0) return undefined;
    return this._priorityQueue.shift()[0];
  }

  back() {
    if (this.size() === 0) return undefined;
    return this._priorityQueue[this.size() - 1][0];
  }

  front() {
    if (this.size() === 0) return undefined;
    return this._priorityQueue[0][0];
  }

  size() {
    return this._priorityQueue.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this._priorityQueue = [];
  }
}

module.exports = PriorityQueue;
