class Stack {
    constructor(){
        this.count = 0;
        this.stack = [];
    }

    push(element){
        this.stack.unshift(element);
        this.count++;
    }

    pop(){
        if(this.count === 0)
            return undefined;

        this.stack.shift();
        this.count--;
    }

    top(){
        if(this.count === 0)
            return undefined;
        
        return this.stack[0];
    }

    size(){
        return this.count;
    }

    empty(){
        return this.count === 0;
    }
}

module.exports = Stack;