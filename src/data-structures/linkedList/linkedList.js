const Node = require("./node");

class LinkedList {
    constructor() {
        this._count = 0;
        this._head = null;
    }

    size() {
        return this._count;
    }

    head() {
        return this._head;
    }

    isEmpty() {
        return this.size() === 0;
    }

    // Add a element at the end of the list
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

    //should remove a element if exists
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    //remove a element from a specif index
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

    //get element in the specific index
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

    // Adds a new element at a specific position
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

    //should return the index of a element in the linked list
    indexOf(element) {
        let currentNode = this._head;
        for (let i = 0; i < this._count; i++) {
            if (currentNode.element === element)
                return i;
            currentNode = currentNode.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
