class Stack {
    constructor(){
        this._stack = [];
    }

    push(element){
        this._stack.unshift(element);
    }

    pop(){
        if(this._stack.length === 0)
            return undefined;

        this._stack.shift();
    }

    top(){
        if(this._stack.length === 0)
            return undefined;
        
        return this._stack[0];
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