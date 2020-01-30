const assert = require('assert');
const Queue = require('../queue');

describe('Queue tests', function(){
    it('Should create a queue', () => {
        const queue = new Queue();
        assert.notEqual(queue, null);
    });

    it('Should add elements to queue', () => {
        const queue = new Queue();

        queue.push(1);
        queue.push(2);

        assert.notDeepEqual(queue.queue, []);
    });

    it('Should check size of queue', () => {
        const queue = new Queue();

        assert.deepEqual(queue.size(), 0);

        queue.push(1);
        queue.push(2);
        
        assert.deepEqual(queue.size(), 2);
    });

    it('Should check if queue is empty', () => {
        const queue = new Queue();
        assert.deepEqual(queue.empty(), true);

        queue.push(1);
        queue.push(2);
        
        assert.deepEqual(queue.empty(), false);
    });

    it('Should return the next element in the queue', () => {
        const queue = new Queue();
        assert.deepEqual(queue.front(), undefined);

        queue.push(1);
        queue.push(2);
        
        assert.deepEqual(queue.front(), 1);
    });

    it('Should return the last element in the queue', () => {
        const queue = new Queue();
        assert.deepEqual(queue.back(), undefined);

        queue.push(1);
        queue.push(2);
        
        assert.deepEqual(queue.back(), 2);
    });

    it('Should remove next element from the queue', () => {
        const queue = new Queue();
        assert.deepEqual(queue.pop(), undefined);

        queue.push(1);
        queue.push(2);

        queue.pop();
        
        assert.deepEqual(queue.front(), 2);
    });
});