const Node = require('./node');

class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    _getRoot() {
        return this._root;
    }

    _setRoot(node) {
        this._root = node;
        return node.element;
    }

    _insertNode(node, element) {
        if (node.element > element) {
            if (node.left === null) {
                node.left = new Node(element);
                return element;
            } else {
                return this._insertNode(node.left, element);
            }
        } else if (node.element < element) {
            if (node.right === null) {
                node.right = new Node(element);
                return element;
            } else {
                return this._insertNode(node.right, element);
            }
        }

        // element already exists in BST
        return undefined;
    }

    insert(element) {
        if (this._getRoot() === null) {
            return this._setRoot(new Node(element));
        } else {
            return this._insertNode(this._getRoot(), element);
        }
    }

    getMin() {
        let current = this._getRoot();
        while (current.left !== null) {
            current = current.left;
        }

        return current.element;
    }

    getMax() {
        let current = this._getRoot();
        while (current.right !== null) {
            current = current.right;
        }

        return current.element;
    }
}

module.exports = BinarySearchTree;