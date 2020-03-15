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

    context('when search an element in BST', () => {
        it('should return true if element exists', () => {
            const bst = new BST();

            bst.insert(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(4);
            bst.insert(2);
            bst.insert(20);
            bst.insert(12);
            bst.insert(8);

            assert.deepEqual(bst.find(4), true);
            assert.deepEqual(bst.find(20), true);
            assert.deepEqual(bst.find(8), true);
        })

        it('should return false if element does not exists', () => {
            const bst = new BST();

            bst.insert(10);
            bst.insert(5);
            bst.insert(15);
            bst.insert(4);
            bst.insert(2);
            bst.insert(20);
            bst.insert(12);
            bst.insert(8);

            assert.deepEqual(bst.find(99), false);
            assert.deepEqual(bst.find(11), false);
            assert.deepEqual(bst.find(0), false);
        })
    });

    context('when transverse the BST', () => {
        it('should transverse In Order', () => {
            const bst = new BST();

            assert.deepEqual(bst.inOrder(), []);

            bst.insert(9);
            assert.deepEqual(bst.inOrder(), [9]);
            bst.insert(4);
            bst.insert(17);
            bst.insert(3);
            bst.insert(6);
            bst.insert(22);
            bst.insert(5);
            bst.insert(7);
            bst.insert(20);

            assert.deepEqual(bst.inOrder(), [3, 4, 5, 6, 7, 9, 17, 20, 22]);
        });

        it('should transverse Post Order', () => {
            const bst = new BST();

            assert.deepEqual(bst.postOrder(), []);

            bst.insert(9);
            assert.deepEqual(bst.postOrder(), [9]);
            bst.insert(4);
            bst.insert(17);
            bst.insert(3);
            bst.insert(6);
            bst.insert(22);
            bst.insert(5);
            bst.insert(7);
            bst.insert(20);

            assert.deepEqual(bst.postOrder(), [3, 5, 7, 6, 4, 20, 22, 17, 9]);
        });

        it('should transverse Pre Order', () => {
            const bst = new BST();

            assert.deepEqual(bst.preOrder(), []);

            bst.insert(9);
            assert.deepEqual(bst.preOrder(), [9]);
            bst.insert(4);
            bst.insert(17);
            bst.insert(3);
            bst.insert(6);
            bst.insert(22);
            bst.insert(5);
            bst.insert(7);
            bst.insert(20);

            assert.deepEqual(bst.preOrder(), [9, 4, 3, 6, 5, 7, 17, 22, 20]);
        });

        it('should transverse Level Order', () => {
            const bst = new BST();

            assert.deepEqual(bst.levelOrder(), []);

            bst.insert(9);
            assert.deepEqual(bst.levelOrder(), [9]);
            bst.insert(4);
            bst.insert(17);
            bst.insert(3);
            bst.insert(6);
            bst.insert(22);
            bst.insert(5);
            bst.insert(7);
            bst.insert(20);

            assert.deepEqual(bst.levelOrder(), [9, 4, 17, 3, 6, 22, 5, 7, 20]);
        });
    });

    context('when remove a node', () => {
        it('should remove a node that has no children', () => {
            const bst = new BST();

            assert.deepEqual(bst.remove(654), null);

            bst.insert(50);
            bst.insert(72);
            bst.insert(17);
            bst.insert(76);
            bst.insert(54);
            bst.insert(23);
            bst.insert(12);
            bst.insert(67);
            bst.insert(19);
            bst.insert(14);
            bst.insert(9);

            bst.remove(76);
            assert.deepEqual(bst.inOrder(), [9, 12, 14, 17, 19, 23, 50, 54, 67, 72]);
        });

        it('should remove a node that has no child on the left', () => {
            const bst = new BST();

            assert.deepEqual(bst.remove(654), null);

            bst.insert(50);
            bst.insert(72);
            bst.insert(17);
            bst.insert(76);
            bst.insert(54);
            bst.insert(23);
            bst.insert(12);
            bst.insert(67);
            bst.insert(19);
            bst.insert(14);
            bst.insert(9);

            bst.remove(54);
            assert.deepEqual(bst.inOrder(), [9, 12, 14, 17, 19, 23, 50, 67, 72, 76]);
        });

        it('should remove a node that has no child on the right', () => {
            const bst = new BST();

            assert.deepEqual(bst.remove(654), null);

            bst.insert(50);
            bst.insert(72);
            bst.insert(17);
            bst.insert(76);
            bst.insert(54);
            bst.insert(23);
            bst.insert(12);
            bst.insert(67);
            bst.insert(19);
            bst.insert(14);
            bst.insert(9);

            bst.remove(23);
            assert.deepEqual(bst.inOrder(), [9, 12, 14, 17, 19, 50, 54, 67, 72, 76]);
        });

        it('should remove a node that has two children', () => {
            const bst = new BST();

            assert.deepEqual(bst.remove(654), null);

            bst.insert(50);
            bst.insert(72);
            bst.insert(17);
            bst.insert(76);
            bst.insert(54);
            bst.insert(23);
            bst.insert(12);
            bst.insert(67);
            bst.insert(19);
            bst.insert(14);
            bst.insert(9);
            
            bst.remove(17);
            
            assert.deepEqual(bst.inOrder(), [9, 12, 14, 19, 23, 50, 54, 67, 72, 76]);
        });
    })
});