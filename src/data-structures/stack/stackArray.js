//A JavaScript array-based Stack class
class Stack {
    constructor(){
        this._stack = [];
    }

    push(element){
        this._stack.push(element);
    }

    pop(){
        if(this._stack.length === 0)
            return undefined;

        this._stack.pop();
    }

    top(){
        if(this._stack.length === 0)
            return undefined;
        
        return this._stack[this._stack.length - 1];
    }

    size(){
        return this._stack.length;
    }

    clear(){
        this._stack = [];
    }

    isEmpty(){
        return this._stack.length === 0;
    }
}

module.exports = Stack;