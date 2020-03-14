const Node = require('./node');
const Queue = require('../queue/queueObject');

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

    _findNode(node, element) {
        if (node === null)
            return false;
        else if (node.element === element)
            return true;
        else if (node.element > element)
            return this._findNode(node.left, element)
        return this._findNode(node.right, element);
    }

    _transverseInOrder(node, result) {
        if (node === null)
            return null;
        this._transverseInOrder(node.left, result);
        result.push(node.element);
        this._transverseInOrder(node.right, result);
    }

    _transversePostOrder(node, result) {
        if (node === null)
            return null;
        this._transversePostOrder(node.left, result);
        this._transversePostOrder(node.right, result);
        result.push(node.element);
    }

    _transversePreOrder(node, result) {
        if (node === null)
            return null;
        result.push(node.element);
        this._transversePreOrder(node.left, result);
        this._transversePreOrder(node.right, result);
    }

    _transverseLevelOrder(node) {
        let result = [];

        if (node === null)
            return [];

        const queue = new Queue();

        queue.push(node);

        while(!queue.isEmpty()){
            result.push(node.element);

            if(node.left !== null)
                queue.push(node.left);

            if(node.right !== null)
                queue.push(node.right);

            queue.pop();
            node = queue.front();
        }

        return result;
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

    find(element) {
        return this._findNode(this._getRoot(), element);
    }

    inOrder() {
        let result = [];
        this._transverseInOrder(this._getRoot(), result);
        return result;
    }

    postOrder() {
        let result = [];
        this._transversePostOrder(this._getRoot(), result);
        return result;
    }

    preOrder() {
        let result = [];
        this._transversePreOrder(this._getRoot(), result);
        return result;
    }

    levelOrder() {
        return this._transverseLevelOrder(this._getRoot());
    }
}

module.exports = BinarySearchTree;