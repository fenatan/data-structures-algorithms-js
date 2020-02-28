/**
 * This class is a Stack implementation based on JavaScript-Object
 */
class Stack {
  /**
   * Creates a STACK data-structure
   * @example
   * const { Stack } = require('data-structures-algorithms-js');
   * const stack = new Stack();
   */
  constructor() {
    this._count = 0;
    this._stack = {};
  }

  /**
   * Adds a element to the top of the STACK
   * @param {*} element Element passed to insert
   * @example
   * const { Stack } = require('data-structures-algorithms-js');
   * const stack = new Stack();
   *
   * stack.push(5); //inserts 5 to the top of the stack
   */
  push(element) {
    this._stack[this._count] = element;
    this._count++;
  }

  /**
   * Removes a element from the top of the STACK
   * @example
   * const { Stack } = require('data-structures-algorithms-js');
   * const stack = new Stack();
   *
   * stack.push(3);
   * stack.push(9);
   *
   * stack.pop(); //removes number 9
   */
  pop() {
    if (this._count === 0) return undefined;
    delete this._stack[this._count - 1];
    this._count--;
  }

  /**
   * Returns the element on the top of the STACK
   * @returns {*|undefined} Returns the element on the top or undefined if stack is empty
   * @example
   * const { Stack } = require('data-structures-algorithms-js');
   * const stack = new Stack();
   *
   * stack.top();// returns undefined
   *
   * stack.push(23);
   * stack.push(89);
   *
   * stack.top(); //returns 89
   */
  top() {
    if (this._count === 0) return undefined;
    return this._stack[this._count - 1];
  }

  /**
   * Returns the size of the STACK data-structure
   * @returns {Number} The number of elements in the STACK
   * @example
   * const { Stack } = require('data-structures-algorithms-js');
   * const stack = new Stack();
   *
   * stack.size(); // returns 0;
   *
   * stack.push(8);
   *
   * stack.size(); //returns 1;
   */
  size() {
    return this._count;
  }

  /**
   * Resets the STACK data-structure
   * @example
   * const { Stack } = require('data-structures-algorithms-js');
   * const stack = new Stack();
   *
   * stack.push(15);
   *
   * stack.clear(); // now stack is empty
   */
  clear() {
    this._stack = {};
    this._count = 0;
  }

  /**
   * Returns if the STACK data-structure is empty
   * @returns {Boolean}
   * @example
   * const { Stack } = require('data-structures-algorithms-js');
   * const stack = new Stack();
   *
   * stack.isEmpty(); // returns true;
   *
   * stack.push(23);
   *
   * stack.isEmpty(); //returns false;
   */
  isEmpty() {
    return this._count === 0;
  }
}

module.exports = Stack;
