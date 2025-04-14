import Node from './Node.js';

class LinkedList {
    constructor() {
        this.head = undefined;
    }

    isEmpty() {
        return this.head === undefined;
    }

    append(newELement) {
        const newNode = new Node(newELement);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.hasNext()) {
                current = current.getNext();
            }
            current.setNext(newNode);
        }
    }

    removeLast() {
        if (this.isEmpty()) {
            return;
        }
        if (!this.head.hasNext()) {
            this.head = undefined;
            return;
        }
        let current = this.head;
        while (current.getNext().hasNext()) {
            current = current.getNext();
        }
        current.setNext(undefined);
    }

    removeFirst() {
        if (!this.isEmpty()) {
            this.head = this.head.getNext();
        }
    }

    length() {
        let count = 0;
        let current = this.head;
        while (current !== undefined) {
            count++;
            current = current.getNext();
        }
        return count;
    }

    addAt(newELement, pos) {
        if (pos < 0 || pos > this.length()) {
            return false;
        }
        const newNode = new Node(newELement);
        if (pos === 0) {
            newNode.setNext(this.head);
            this.head = newNode;
            return true;
        }
        let current = this.head;
        for (let i = 0; i < pos - 1; i++) {
            current = current.getNext();
        }
        newNode.setNext(current.getNext());
        current.setNext(newNode);
        return true;
    }

    removeAt(pos) {
        if (this.isEmpty() || pos < 0 || pos >= this.length()) {
            return false;
        }
        if (pos === 0) {
            this.head = this.head.getNext();
            return true;
        }
        let current = this.head;
        for (let i = 0; i < pos - 1; i++) {
            current = current.getNext();
        }
        if (!current.getNext()) {
            return false;
        }
        current.setNext(current.getNext().getNext());
        return true;
    }

    search(key) {
        let current = this.head;
        let index = 0;
        while (current !== undefined) {
            if (current.data === key) {
                return index;
            }
            current = current.getNext();
            index++;
        }
        return -1;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let result = '';
        let current = this.head;
        while (current !== undefined) {
            result += String(current.data);
            current = current.getNext();
        }
        return result;
    }
}

export default LinkedList;