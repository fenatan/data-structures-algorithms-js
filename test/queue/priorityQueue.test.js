const assert = require('assert');
const PriorityQueue = require('../../src/data-structures/queue/priorityQueue');;

describe('Priority-Queue tests', function () {

    it('Should create a Priority-Queue', () => {
        const priorityQueue = new PriorityQueue();
        assert.notEqual(priorityQueue, null);
    });

    it('Should add one element on the Priority-Queue', () => {
        const priorityQueue = new PriorityQueue();

        priorityQueue.push('Spider Man', 5);
        priorityQueue.push('Iron Man', 10);

        assert.notDeepEqual(priorityQueue._priorityQueue, []);
    });

    it('Should return the size of Priority-Queue', () => {
        const priorityQueue = new PriorityQueue();
        assert.deepEqual(priorityQueue.size(), 0);

        priorityQueue.push('Spider Man', 5);
        priorityQueue.push('Iron Man', 10);

        assert.deepEqual(priorityQueue.size(), 2);
    });

    it('Should check if the Priority-Queue is empty', () => {
        const priorityQueue = new PriorityQueue();
        assert.ok(priorityQueue.isEmpty());

        priorityQueue.push('Spider Man', 5);
        priorityQueue.push('Iron Man', 10);

        assert.ok(!priorityQueue.isEmpty());
    });

    it('Should return the last element in Priority-Queue', () => {
        const priorityQueue = new PriorityQueue();
        assert.deepEqual(priorityQueue.back(), undefined);

        priorityQueue.push('Spider Man', 5);
        priorityQueue.push('Hulk', 2);
        priorityQueue.push('Iron Man', 10);

        assert.deepEqual(priorityQueue.back(), 'Hulk');
    });

    it('Should return the first element in Priority-Queue', () => {
        const priorityQueue = new PriorityQueue();
        assert.deepEqual(priorityQueue.front(), undefined);

        priorityQueue.push('Spider Man', 5);
        priorityQueue.push('Hulk', 2);
        priorityQueue.push('Iron Man', 10);

        assert.deepEqual(priorityQueue.front(), 'Iron Man');
    });

    it('Should remove the first element in Priority-Queue', () => {
        const priorityQueue = new PriorityQueue();
        assert.deepEqual(priorityQueue.pop(), undefined);

        priorityQueue.push('Spider Man', 5);
        priorityQueue.push('Hulk', 2);
        priorityQueue.push('Iron Man', 10);

        assert.deepEqual(priorityQueue.pop(), 'Iron Man');
    });

    it('Should clear Priority-Queue', () => {
        const priorityQueue = new PriorityQueue();
        assert.deepEqual(priorityQueue.size(), 0);

        priorityQueue.push('Spider Man', 5);
        priorityQueue.push('Hulk', 2);
        priorityQueue.pop()
        priorityQueue.push('Iron Man', 10);

        assert.deepEqual(priorityQueue.front(), 'Iron Man');

        priorityQueue.clear();

        assert.deepEqual(priorityQueue.size(), 0);
    });
});