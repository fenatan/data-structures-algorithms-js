/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/**
 * This class contains all methods to simulate a SET data-structure
 */
class Set {
  /**
   * Create a SET data-structure
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   */
  constructor() {
    this._set = {};
    this._count = 0;
  }

  /**
   * Add a element into the SET data-structure
   *
   * @param {*} element Element passed to insert
   * @returns {Boolean} If element was added into the SET
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new set();
   *
   * set.insert(2); //return true
   * set.insert(38); //return true
   * set.insert(2); //return false
   */
  insert(element) {
    if (this.find(element)) return false;
    this._set[element] = element;
    this._count++;
    return true;
  }

  /**
   * Remove a element from the SET data-structure
   * @param {*} element Element passed to remove
   * @returns {Boolean} If element was removed from the SET
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   *
   * set.insert(25);
   * set.insert(3);
   *
   * set.erase(3); //return true
   * set.erase(42); //return false;
   */
  erase(element) {
    if (!this.find(element)) return false;
    delete this._set[element];
    this._count--;
    return true;
  }

  /**
   * Return all elements in the SET data-structure
   *
   * @returns {Array} Return an ordered Array
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new set();
   *
   * set.insert(55);
   * set.insert(36);
   * set.insert(78);
   *
   * set.values(); //return [36, 55, 78]
   */
  values() {
    const items = [];
    for (const i in this._set) {
      items.push(this._set[i]);
    }
    return items;
  }

  /**
   * Find a specific element in the SET data-structure
   * @param {*} Element Element to find
   * @returns {Boolean}
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   *
   * set.find(5); //return false
   */
  find(element) {
    return element in this._set;
  }

  /**
   * Return the size of the SET data-structure
   * @returns {Number} The number of elements in SET
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   *
   * set.size(); // return 0;
   *
   * set.insert(8);
   *
   * set.size(); //return 1;
   */
  size() {
    return this._count;
  }

  /**
   * Return if the SET data-structure is empty
   * @returns {Boolean}
   * @example
   * const { Set } = require('data-structures-algorithms-js');
   * const set = new Set();
   *
   * set.isEmpty(); // return true;
   *
   * set.insert(15);
   *
   * set.isEmpty(); //return false;
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Reset the SET data-structure
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
