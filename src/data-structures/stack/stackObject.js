//A JavaScript object-based Stack class
class Stack {
    constructor() {
        this._count = 0;
        this._stack = {};
    }
    push(element) {
        this._stack[this._count] = element;
        this._count++;
    }

    pop() {
        if (this._count === 0)
            return undefined;
        delete this._stack[this._count - 1];
        this._count--;
    }

    top() {
        if (this._count === 0)
            return undefined;
        return this._stack[this._count - 1];
    }

    size() {
        return this._count;
    }

    clear() {
        this._stack = {};
        this._count = 0;
    }

    isEmpty() {
        return this._count === 0;
    }
}

module.exports = Stack;