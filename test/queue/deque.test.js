const assert = require('assert');
const Deque = require('../../src/data-structures/queue/deque');

describe('Deque tests', function () {
    it('Should create a queue', () => {
        const deque = new Deque();
        assert.notEqual(deque, null);
    });

    it('Should add elements to the end of deque', () => {
        const deque = new Deque();

        deque.addBack(1);
        deque.addBack(2);

        assert.notDeepEqual(deque._deque, {});
    });

    it('Should add elements to the front of the deque', () => {
        const deque = new Deque();

        deque.addFront(1);

        deque.addBack(2);

        deque.addFront(3);

        assert.notDeepEqual(deque._deque, {});
        assert.deepEqual(deque.front(), 3);
    });

    it('Should check the size of deque', () => {
        const deque = new Deque();

        assert.deepEqual(deque.size(), 0);

        deque.addBack(10);
        deque.addBack(1368);
        deque.addFront(3);

        assert.deepEqual(deque.size(), 3);
    });

    it('Should check if deque is empty', () => {
        const deque = new Deque();
        assert.deepEqual(deque.isEmpty(), true);

        deque.addFront(3);
        deque.addBack(1);
        deque.addBack(2);

        assert.deepEqual(deque.isEmpty(), false);
    });

    it('Should return the first element in deque', () => {
        const deque = new Deque();
        assert.deepEqual(deque.front(), undefined);

        deque.addBack(1);
        deque.addFront(2);
        deque.addBack(3);
        deque.addBack(567);

        assert.deepEqual(deque.front(), 2);
    });

    it('Should return the last element in deque', () => {
        const deque = new Deque();
        assert.deepEqual(deque.back(), undefined);

        deque.addFront(125);
        deque.addBack(1);
        deque.addBack(2);
        deque.addBack(567);

        assert.deepEqual(deque.back(), 567);
    });

    it('Should remove the first element from the deque', () => {
        const deque = new Deque();
        assert.deepEqual(deque.removeFront(), undefined);

        deque.addBack(1);
        deque.addBack(2);
        deque.addFront(3);
        deque.addBack(567);

        assert.deepEqual(deque.removeFront(), 3);
    });

    it('Should remove the last element from the deque', () => {
        const deque = new Deque();
        assert.deepEqual(deque.removeBack(), undefined);

        deque.addBack(1);
        deque.addBack(2);

        deque.removeFront();

        deque.addFront(3);
        deque.addFront(4);

        assert.deepEqual(deque.removeBack(), 2);
    });

    it('Should clear queue', () => {
        const deque = new Deque();

        deque.addBack(1);
        deque.addBack(2);
        deque.addFront(3);

        deque.clear();

        assert.ok(deque.isEmpty());
    });
});