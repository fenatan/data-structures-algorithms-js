const assert = require('assert');
const LinkedList = require('../../src/data-structures/linkedList/linkedList');

describe('Linked-List tests', function () {
    it('Should create a linked list', () => {
        const linkedList = new LinkedList();

        assert.notEqual(linkedList, null);
    });

    describe('push(element):', function () {
        it('should insert at the end of the linked list', () => {
            const linkedList = new LinkedList();

            linkedList.push(10);
            assert.deepEqual(linkedList.head().element, 10);

            linkedList.push(32);
            assert.deepEqual(linkedList.head().next.element, 32);
            assert.deepEqual(linkedList.size(), 2);
        });
    });

    describe('remove(element):', function () {
        it('should remove a element if it exists', () => {
            const linkedList = new LinkedList();

            linkedList.push(1);
            linkedList.push(2);

            assert.deepEqual(linkedList.remove(6), undefined);
            assert.deepEqual(linkedList.remove(1), 1);
            assert.deepEqual(linkedList.head().element, 2);
        });
    });

    describe('removeAt(index):', function () {
        it('should remove a element from specific index', () => {
            const linkedList = new LinkedList();

            linkedList.push(4);
            linkedList.push(93);
            linkedList.push(12);

            assert.deepEqual(linkedList.removeAt(2), 12);
            assert.deepEqual(linkedList.removeAt(1), 93);
        });

        context('when index is out of the range', () => {
            it('should return undefined', () => {
                const linkedList = new LinkedList();

                assert.deepEqual(linkedList.removeAt(0), undefined);

                linkedList.push(15);

                assert.deepEqual(linkedList.removeAt(-5), undefined);
                assert.deepEqual(linkedList.removeAt(2), undefined);
            });
        });

        context('when index is 0', () => {
            it('should remove head of the list', () => {
                const linkedList = new LinkedList();

                linkedList.push(15);
                linkedList.push(32);

                assert.deepEqual(linkedList.removeAt(0), 15);
            });
        });
    });

    describe('getElementAt(index):', function () {
        it('should return the element in the specific index', () => {
            const linkedList = new LinkedList();

            assert.deepEqual(linkedList.getElementAt(0), undefined);

            linkedList.push(6);
            linkedList.push(5);
            linkedList.push(23);

            assert.deepEqual(linkedList.getElementAt(2), 23);
            assert.deepEqual(linkedList.getElementAt(1), 5);
            assert.deepEqual(linkedList.getElementAt(0), 6);
            assert.deepEqual(linkedList.getElementAt(10), undefined);
        });
    });

    describe('insert(element, index):', function () {
        it('should insert a element into a specific position', () => {
            const linkedList = new LinkedList();

            linkedList.push(47);
            linkedList.push(12);

            linkedList.insert(3, 0);
            linkedList.insert(6, 2);
            linkedList.insert(87, 4);

            assert.deepEqual(linkedList.getElementAt(0), 3);
            assert.deepEqual(linkedList.getElementAt(2), 6);
            assert.deepEqual(linkedList.getElementAt(4), 87);
            assert.deepEqual(linkedList.insert(874, 10), false);
        });
    });

    describe('indexOf(element):', function () {
        it('should return the index of a element', () => {
            const linkedList = new LinkedList();

            linkedList.push(3);
            linkedList.push(6);
            linkedList.push(9);

            assert.deepEqual(linkedList.indexOf(9), 2);
        });

        context('when element does not exists in the linked list', () => {
            it('should return -1', () => {
                const linkedList = new LinkedList();

                linkedList.push(2);
                linkedList.push(4);

                assert.deepEqual(linkedList.indexOf(95), -1);
            });
        });
    });

    it('should return if the linked list is empty', () => {
        const linkedList = new LinkedList();

        assert.ok(linkedList.isEmpty());

        linkedList.push(2);
        linkedList.push(4);


        assert.ok(!linkedList.isEmpty());
    });

    it('should clear the linked list', () => {
        const linkedList = new LinkedList();

        linkedList.push(2);
        linkedList.push(4);

        linkedList.clear();

        assert.deepEqual(linkedList.size(), 0);
    });
});