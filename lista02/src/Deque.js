class Deque {
    constructor(size = 5) {
        this.items = [];
        this.maxSize = size;
    }

    addFront(element) {
        if (element == null || element == undefined) throw new Error("Null or undefined element");
        if (this.items.length === this.maxSize) throw new Error("Deque overflow");
        this.items.unshift(element);
    }

    removeFront() {
        if (this.items.length === 0) throw new Error("Deque underflow");
        return this.items.shift();
    }

    addRear(element) {
        if (element == null || element == undefined) throw new Error("Null or undefined element");
        if (this.items.length === this.maxSize) throw new Error("Deque overflow");
        this.items.push(element);
    }

    removeRear() {
        if (this.items.length === 0) throw new Error("Deque underflow");
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    toString() {
        return `[${this.items.join(', ')}]`;
    }
}

export default Deque;