const assert = require('assert');
const Stack = require('../stack');

describe('Stack tests', function(){
    it('Should create a stack', () => {
        const stack = new Stack();
        assert.notEqual(stack, null);
    });

    it('Should add elements to stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push('c');
        assert.notDeepEqual(stack.stack, []);
    });

    it('Should check size of stack', () => {
        const stack = new Stack();
        assert.deepEqual(stack.size(), 0);

        stack.push(1);
        stack.push(2);
        
        assert.deepEqual(stack.size(), 2);
    });

    it('Should check if stack is empty', () => {
        const stack = new Stack();
        assert.deepEqual(stack.isEmpty(), true);

        stack.push(1);
        stack.push(2);
        
        assert.deepEqual(stack.isEmpty(), false);
    });

    it('Should return the top element in the stack', () => {
        const stack = new Stack();
        assert.deepEqual(stack.top(), undefined);

        stack.push(1);
        stack.push(2);
        
        assert.deepEqual(stack.top(), 2);
    });

    it('Should pop element from the top of stack', () => {
        const stack = new Stack();
        assert.deepEqual(stack.pop(), undefined);

        stack.push(1);
        stack.push(2);

        stack.pop();
        
        assert.deepEqual(stack.top(), 1);
    });
});