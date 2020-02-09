const assert = require('assert');
const Deque = require('../deque');

describe('Queue tests', function () {
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

    it('Should check the size of deque', () => {
        const deque = new Deque();

        assert.deepEqual(deque.size(), 0);

        deque.addBack(10);
        deque.addBack(1368);

        assert.deepEqual(deque.size(), 2);
    });

    it('Should check if deque is empty', () => {
        const deque = new Deque();
        assert.deepEqual(deque.isEmpty(), true);

        deque.addBack(1);
        deque.addBack(2);

        assert.deepEqual(deque.isEmpty(), false);
    });

    it('Should return the first element in deque', () => {
        const deque = new Deque();
        assert.deepEqual(deque.front(), undefined);

        deque.addBack(1);
        deque.addBack(2);
        deque.addBack(567);

        assert.deepEqual(deque.front(), 1);
    });

    it('Should return the last element in deque', () => {
        const deque = new Deque();
        assert.deepEqual(deque.back(), undefined);

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
        deque.addBack(567);

        assert.deepEqual(deque.removeFront(), 1);
    });

    it('Should remove the last element from the deque', () => {
        const deque = new Deque();
        assert.deepEqual(deque.removeBack(), undefined);

        deque.addBack(1);
        deque.addBack(2);

        deque.removeFront();

        deque.addBack(647);
        deque.addBack(567);

        assert.deepEqual(deque.removeBack(), 567);
    });
    
    it('Should clear queue', () => {
        const deque = new Deque();

        deque.addBack(1);
        deque.addBack(2);
        deque.clear();

        assert.ok(deque.isEmpty());
    });
});