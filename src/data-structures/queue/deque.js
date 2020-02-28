/**
 * This class is a Deque implementation. This data-structure allows add and remove elements
 * at the front or at the back.
 */
class Deque {
  /**
   * Create a DEQUE data-structure
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   */
  constructor() {
    this._backIndex = 0;
    this._frontIndex = 0;
    this._deque = {};
  }

   /**
   * Add a element at the front of the DEQUE
   * @param {*} element Element passed to insert
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   *
   * deque.addFront(55); //insert 55 at the front of the deque
   */
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

  /**
   * Add a element at the back of the DEQUE
   * @param {*} element Element passed to insert
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   *
   * deque.addBack(87); //insert 87 at the back of the deque
   */
  addBack(element) {
    this._deque[this._backIndex] = element;
    this._backIndex++;
  }
   /**
   * Remove an element from the beginning of the DEQUE
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   *
   * deque.addFront(59); 
   * deque.addFront(14);
   * 
   * deque.removeFront(); //remove 14 from the deque
   */
  removeFront() {
    if (this.size() === 0) return undefined;

    const removed = this._deque[this._frontIndex];
    delete this._deque[this._frontIndex];
    this._frontIndex++;
    return removed;
  }
  /**
   * Remove an element from the end of the DEQUE
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   *
   * deque.addFront(59); 
   * deque.addFront(14);
   * 
   * deque.removeBack(); //remove 59 from the deque
   */
  removeBack() {
    if (this.size() === 0) return undefined;

    const removed = this._deque[this._backIndex - 1];
    delete this._deque[this._backIndex - 1];
    this._backIndex--;
    return removed;
  }
  /**
   * Return the element at the front of DEQUE
   * @returns {*} The element at the front
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   *
   * deque.addFront(6); 
   * deque.addBack(3);
   *
   * deque.front(); //return 6;
   */
  front() {
    if (this.size() === 0) return undefined;
    return this._deque[this._frontIndex];
  }
  /**
   * Return the element at the back of DEQUE
   * @returns {*} The element at the back
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   *
   * deque.addFront(6); 
   * deque.addBack(3);
   *
   * deque.back(); //return 3;
   */
  back() {
    if (this.size() === 0) return undefined;
    return this._deque[this._backIndex - 1];
  }
  /**
   * Return if the DEQUE data-structure is empty
   * @returns {Boolean} 
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   *
   * deque.isEmpty(); // return true;
   *
   * deque.addBack(23);
   *
   * deque.isEmpty(); //return false;
   */
  isEmpty() {
    return this.size() === 0;
  }
   /**
   * Return the size of the DEQUE data-structure
   * @returns {Number} The number of elements in the DEQUE
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   *
   * deque.size(); // return 0;
   *
   * deque.addFront(8);
   *
   * deque.size(); //return 1;
   */
  size() {
    return this._backIndex - this._frontIndex;
  }
  /**
   * Reset the DEQUE data-structure
   * @example
   * const { Deque } = require('data-structures-algorithms-js');
   * const deque = new Deque();
   *
   * deque.addFront(15);
   * deque.addBack(9);
   * 
   * deque.clear(); // now deque is empty
   */
  clear() {
    this._backIndex = 0;
    this._frontIndex = 0;
    this._deque = {};
  }
}

module.exports = Deque;
