const Node = require("./node");
/**
 * This class is a Linked List implementation
 */
class LinkedList {
    /**
    * Creates a Linked List data-structure
    * @example
    * const { LinkedList } = require('data-structures-algorithms-js');
    * const linkedList = new LinkedList();
    */
    constructor() {
        this._count = 0;
        this._head = null;
    }

    /**
    * Adds a element to the end of the linked list
    * @param {*} element Element passed to insert
    * @example
    * const { LinkedList } = require('data-structures-algorithms-js');
    * const linkedList = new LinkedList();
    *
    * linkedList.push(5); //inserts 5 to the end of the linked list
    */
    push(element) {
        const node = new Node(element);
        if (this._head === null) this._head = node;
        else {
            let currentNode = this.head();
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this._count++;
    }

    /**
    * Removes a element if it exists
    * @param {*} element Element passed to remove
    * @returns {*|undefined} Returns the removed element or undefined
    * @example
    * const { LinkedList } = require('data-structures-algorithms-js');
    * const linkedList = new LinkedList();
    *
    * linkedList.push(3);
    * linkedList.push(9);
    *
    * linkedList.remove(3); //removes and returns number 3
    */
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    /**
    * Removes a element from a specific index if it exists
    * @param {*} element Element passed to remove
    * @returns {*|undefined} Returns the removed element or undefined
    * @example
    * const { LinkedList } = require('data-structures-algorithms-js');
    * const linkedList = new LinkedList();
    *
    * linkedList.push(3);
    * linkedList.push(9);
    *
    * linkedList.removeAt(1); //removes and returns number 9
    */
    removeAt(index) {
        if (index >= 0 && index < this._count) {
            let currentNode = this.head();
            if (index === 0) {
                this._head = currentNode.next;
            } else {
                let previousNode = this.getElementAt(index - 1, 1);
                currentNode = previousNode.next;
                previousNode.next = currentNode.next;
            }
            this._count--;
            return currentNode.element;
        }
        return undefined;
    }

    /**
    * Returns a element from a specific index if it exists
    * @param {*} index Index passed to return element
    * @returns {*|undefined} Returns the element or undefined
    * @example
    * const { LinkedList } = require('data-structures-algorithms-js');
    * const linkedList = new LinkedList();
    *
    * linkedList.push(3);
    * linkedList.push(9);
    *
    * linkedList.getElementAt(1); //returns number 9
    */
    getElementAt(index, flag = 0) {
        if (index >= 0 && index < this._count) {
            let currentNode = this._head;
            for (let i = 0; i < index; i++)
                currentNode = currentNode.next;
            if (flag === 0)
                return currentNode.element;
            return currentNode;
        }
        return undefined;
    }

    /**
    * Inserts a element to the specific position of the linked list
    * @param {*} element Element passed to insert
    * @param {Number} index Index to insert
    * @example
    * const { LinkedList } = require('data-structures-algorithms-js');
    * const linkedList = new LinkedList();
    *
    * linkedList.push(5);
    * linkedList.push(7);
    * 
    * linkedList.insert(15, 1); // inserts 15 at index 1
    */
    insert(element, index) {
        if (index >= 0 && index <= this._count) {
            const node = new Node(element);
            if (index === 0) {
                const currentNode = this._head;
                node.next = currentNode;
                this._head = node;
            } else {
                let currentNode = this.getElementAt(index - 1, 1);
                node.next = currentNode.next;
                currentNode.next = node;
            }
            this._count++;
            return true;
        }
        return false;
    }

    /**
    * Returns the index of a specific element if it exists
    * @param {*} element Element passed to find the index
    * @returns {Number} Returns the index or -1
    * @example
    * const { LinkedList } = require('data-structures-algorithms-js');
    * const linkedList = new LinkedList();
    *
    * linkedList.push(3);
    * linkedList.push(9);
    *
    * linkedList.indexOf(5); //returns -1
    * linkedList.indexOf(3); //returns 0
    */
    indexOf(element) {
        let currentNode = this._head;
        for (let i = 0; i < this._count; i++) {
            if (currentNode.element === element)
                return i;
            currentNode = currentNode.next;
        }
        return -1;
    }

    /**
   * Returns the size of the Linked List
   * @returns {Number} The number of elements in the Linked List
   * @example
   * const { LinkedList } = require('data-structures-algorithms-js');
   * const linkedList = new LinkedList();
   *
   * linkedList.size(); // returns 0;
   *
   * linkedList.push(8);
   *
   * linkedList.size(); //returns 1;
   */
    size() {
        return this._count;
    }
    /**
    * Returns the nodo on the head of the linked list
    * @returns {Object} returns the head object with the element and next node 
    * @example
    * const { LinkedList } = require('data-structures-algorithms-js');
    * const linkedList = new LinkedList();
    *
    * linkedList.push(23);
    *
    * linkedList.head(); //returns {element:23, next:null};
    */
    head() {
        return this._head;
    }
    /**
    * Returns if the linked list is empty
    * @returns {Boolean}
    * @example
    * const { LinkedList } = require('data-structures-algorithms-js');
    * const linkedList = new LinkedList();
    *
    * linkedList.isEmpty(); // returns true;
    *
    * linkedList.push(23);
    *
    * linkedList.isEmpty(); //returns false;
    */
    isEmpty() {
        return this.size() === 0;
    }
    /**
   * Resets the Linked List
   * @example
   * const { LinkedList } = require('data-structures-algorithms-js');
   * const linkedList = new LinkedList();
   *
   * linkedList.push(15);
   *
   * linkedList.clear(); // now linked list is empty
   */
    clear() {
        this._count = 0;
        this._head = null;
    }
}

module.exports = LinkedList;
