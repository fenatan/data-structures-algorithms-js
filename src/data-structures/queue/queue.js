//Simulation of a Queue behaviour
//FIFO - First In - First Out

class Queue {
    constructor(){
        this.count = 0;
        this.queue = [];
    }

    //insert a element
    push(element){
        this.queue.push(element);
        this.count++;
    }

    //remove next element
    pop(){
        if(this.count === 0)
            return undefined;

        this.queue.shift();
        this.count--;
    }

    //Access next element
    front(){
        if(this.count === 0)
            return undefined;  
        return this.queue[0];
    }

    //Access last element
    back(){
        if(this.count === 0)
            return undefined;  
        return this.queue[this.count-1];
    }

    //test if queue is empty
    empty(){
        return this.count === 0;
    }

    //return size of queue
    size(){
        return this.count;
    }
}

module.exports = Queue;