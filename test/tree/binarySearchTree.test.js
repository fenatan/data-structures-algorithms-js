const assert = require('assert');
const BST = require('../../src/data-structures/Tree/binarySearchTree');

describe('BST tests', function () {
    it('Should create a BST', () => {
        const bst = new BST();
        assert.notEqual(bst, null);
    });

    context('when add an element to BST', () => {
        it('Should add a root to BST', () => {
            const bst = new BST();

            assert.deepEqual(bst.insert(5), 5);
        });

        it('Should add a element on the left', () => {
            const bst = new BST();

            bst.insert(10);

            assert.deepEqual(bst.insert(5), 5);
            assert.deepEqual(bst.insert(2), 2);
            assert.deepEqual(bst.insert(1), 1);

            assert.deepEqual(bst.insert(6), 6);
        });

        it('Should add a element on the right', () => {
            const bst = new BST();

            bst.insert(5);

            assert.deepEqual(bst.insert(8), 8);
            assert.deepEqual(bst.insert(15), 15);
            assert.deepEqual(bst.insert(20), 20);

            assert.deepEqual(bst.insert(10), 10);
        });

        it('Should not add a element if it already exists', () => {
            const bst = new BST();

            bst.insert(5);
            bst.insert(2);
            bst.insert(7);

            assert.deepEqual(bst.insert(2), undefined);
        });
    });

    it('Should return the minimum element in the tree', () => {
        const bst = new BST();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(4);
        bst.insert(2);
        bst.insert(20);
        bst.insert(12);
        bst.insert(8);

        assert.deepEqual(bst.getMin(), 2);
    });

    it('Should return the maximum element in the tree', () => {
        const bst = new BST();

        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(4);
        bst.insert(2);
        bst.insert(20);
        bst.insert(12);
        bst.insert(8);

        assert.deepEqual(bst.getMax(), 20);
    });
});