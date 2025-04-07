class Queue {

    constructor(limit = 5) {
        this.queue = [];
        this.limit = limit;
    }

    enqueue(newElement) {
        if(newElement == null || newElement == undefined ) throw new Error("Null or undefined element");
        if(this.size() == this.limit) throw new Error("Queue overflow");
        this.queue.push(newElement);
    }

    dequeue() {
        if(this.size() == 0) throw new Error("Queue underflow");
        const front = this.queue[0];
        this.reorder();
        return front;
    }

    reorder() {
        this.queue = this.queue.filter((element, index) => index != 0);
    }

    front() {
        if(this.size() == 0) return undefined;
        return this.queue[0];
    }

    clear() {
        this.queue = [];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.size() == 0;
    }

    isFull() {
        return this.size() == this.limit;
    }

    toString() {
        return '[' + this.queue.join(', ') + ']';
    }

}

export default Queue;