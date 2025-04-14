import LinkedList from './LinkedList.js';

class DynamicQueue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(newElement) {
        if (newElement === null || newElement === undefined) {
            throw new Error("Null or undefined element");
        }
        this.list.append(newElement); 
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue underflow");
        }
        const front = this.list.head.data; 
        this.list.removeFirst();
        return front;
    }

    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.list.head.data;
    }

    clear() {
        this.list = new LinkedList();
    }

    size() {
        return this.list.length();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    toString() {
        if (this.isEmpty()) {
            return '[]';
        }
        let result = [];
        let current = this.list.head;
        while (current !== undefined) {
            result.push(String(current.data));
            current = current.getNext();
        }
        return `[${result.join(', ')}]`;
    }

    includes(element) {
        return this.list.search(element) !== -1;
    }
}

export default DynamicQueue;