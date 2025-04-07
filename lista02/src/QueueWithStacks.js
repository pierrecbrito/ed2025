import Stack from "./Stack";

class QueueWithStacks {
    constructor(size = 5) {
        this.stackIn = new Stack(size);
        this.stackOut = new Stack(size);
        this.maxSize = size;
    }

    enqueue(element) {
        if (this.stackIn.getSize() + this.stackOut.getSize() === this.maxSize) throw new Error("Queue overflow");
        this.stackIn.push(element);
    }

    dequeue() {
        if (this.stackIn.isEmpty() && this.stackOut.isEmpty()) throw new Error("Queue underflow");
        if (this.stackOut.isEmpty()) {
            while (!this.stackIn.isEmpty()) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
        return this.stackOut.pop();
    }

    front() {
        if (this.stackIn.isEmpty() && this.stackOut.isEmpty()) return undefined;
        if (this.stackOut.isEmpty()) {
            while (!this.stackIn.isEmpty()) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
        return this.stackOut.getTop();
    }

    isEmpty() {
        return this.stackIn.isEmpty() && this.stackOut.isEmpty();
    }

    size() {
        return this.stackIn.getSize() + this.stackOut.getSize();
    }

    clear() {
        this.stackIn.clear();
        this.stackOut.clear();
    }

    toString() {
        if (this.stackOut.isEmpty()) {
            while (!this.stackIn.isEmpty()) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
        return this.stackOut.toString();
    }
}

export default QueueWithStacks;