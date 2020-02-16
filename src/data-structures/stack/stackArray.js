/* eslint-disable no-underscore-dangle */
/**
 * This class is a Stack implementation based on JavaScript-Array
 */
class StackArray {
  /**
   * Create a STACK data-structure
   * @example
   * const { StackArray } = require('data-structures-algorithms-js');
   * const stack = new StackArray();
   */
  constructor() {
    this._stack = [];
  }

  /**
   * Add a element to the top of the STACK
   * @param {* | Array} element Element or Array passed to insert
   * @example
   * const { StackArray } = require('data-structures-algorithms-js');
   * const stack = new StackArray();
   *
   * stack.push(5); //insert 5 to the top of the stack
   * stack.push([8,63,2]); //insert 8,63 and 2 to the top of the stack
   */
  push(element) {
    this._stack.push(element);
  }

  /**
   * Remove a element from the top of the STACK
   * @example
   * const { StackArray } = require('data-structures-algorithms-js');
   * const stack = new StackArray();
   *
   * stack.push(3);
   * stack.push(9);
   *
   * stack.pop(); //remove number 9
   */
  pop() {
    if (this._stack.length === 0) return undefined;

    this._stack.pop();
  }

  /**
   * Return the element on the top of the STACK
   * @returns {*|undefined} Return the element on the top or undefined if stack is empty
   * @example
   * const { StackArray } = require('data-structures-algorithms-js');
   * const stack = new StackArray();
   *
   * stack.top();// return undefined
   *
   * stack.push(23);
   * stack.push(89);
   *
   * stack.top(); //return 89
   */
  top() {
    if (this._stack.length === 0) return undefined;

    return this._stack[this._stack.length - 1];
  }

  /**
   * Return the size of the STACK data-structure
   * @returns {Number} The number of elements in the STACK
   * @example
   * const { StackArray } = require('data-structures-algorithms-js');
   * const stack = new StackArray();
   *
   * stack.size(); // return 0;
   *
   * stack.push(8);
   *
   * stack.size(); //return 1;
   */
  size() {
    return this._stack.length;
  }

  /**
   * Reset the STACK data-structure
   * @example
   * const { StackArray } = require('data-structures-algorithms-js');
   * const stack = new StackArray();
   *
   * stack.push(15);
   *
   * stack.clear(); // now stack is empty
   */
  clear() {
    this._stack = [];
  }

  /**
   * Return if the STACK data-structure is empty
   * @returns {Boolean}
   * @example
   * const { StackArray } = require('data-structures-algorithms-js');
   * const stack = new StackArray();
   *
   * stack.isEmpty(); // return true;
   *
   * stack.push(23);
   *
   * stack.isEmpty(); //return false;
   */
  isEmpty() {
    return this._stack.length === 0;
  }
}

module.exports = StackArray;
