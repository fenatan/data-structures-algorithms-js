/**
 * This class contains all methods to simulate a SET data-structure
 */
class Set {
  /**
   * Creates a SET data-structure
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   */
  constructor() {
    this._set = {};
    this._count = 0;
  }

  /**
   * Adds an element to the SET data structure
   *
   * @param {*} element Element passed to insert
   * @returns {Boolean} If element was added into the SET
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new set();
   *
   * set.insert(2); //returns true
   * set.insert(38); //returns true
   * set.insert(2); //returns false
   */
  insert(element) {
    if (this.find(element)) return false;
    this._set[element] = element;
    this._count++;
    return true;
  }

  /**
   * Removes a element from the SET data-structure
   * @param {*} element Element passed to remove
   * @returns {Boolean} If element was removed from the SET
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   *
   * set.insert(25);
   * set.insert(3);
   *
   * set.erase(3); //returns true
   * set.erase(42); //returns false;
   */
  erase(element) {
    if (!this.find(element)) return false;
    delete this._set[element];
    this._count--;
    return true;
  }

  /**
   * Returns all elements in the SET data-structure
   *
   * @returns {Array} Returns an ordered Array
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new set();
   *
   * set.insert(55);
   * set.insert(36);
   * set.insert(78);
   *
   * set.values(); //returns [36, 55, 78]
   */
  values() {
    const items = [];
    for (const i in this._set) {
      items.push(this._set[i]);
    }
    return items;
  }

  /**
   * Finds a specific element in the SET data-structure
   * @param {*} Element Element to find
   * @returns {Boolean}
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   *
   * set.find(5); //returns false
   */
  find(element) {
    return element in this._set;
  }

  /**
   * Returns the size of the SET data-structure
   * @returns {Number} The number of elements in SET
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   *
   * set.size(); // returns 0;
   *
   * set.insert(8);
   *
   * set.size(); //returns 1;
   */
  size() {
    return this._count;
  }

  /**
   * Returns if the SET data-structure is empty
   * @returns {Boolean}
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   *
   * set.isEmpty(); // returns true;
   *
   * set.insert(15);
   *
   * set.isEmpty(); //returns false;
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Resets the SET data-structure
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   *
   * set.insert(15);
   *
   * set.clear();
   */
  clear() {
    this._set = {};
    this._count = 0;
  }
}

module.exports = Set;
