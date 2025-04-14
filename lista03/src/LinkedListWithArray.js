import Node from './SimpleNode.js';

class LinkedListWithArray {
    constructor() {
        this.nodes = []; 
    }

    isEmpty() {
        return this.nodes.length === 0;
    }

    append(newElement) {
        const newNode = new Node(newElement);
        this.nodes.push(newNode); 
    }

    removeLast() {
        if (this.isEmpty()) {
            return;
        }
        this.nodes.pop(); 
    }

    removeFirst() {
        if (!this.isEmpty()) {
            this.nodes.shift();
        }
    }

    length() {
        return this.nodes.length;
    }

    addAt(newElement, pos) {
        if (pos < 0 || pos > this.length()) {
            return false;
        }
        const newNode = new Node(newElement);
        this.nodes.splice(pos, 0, newNode); 
        return true;
    }

    removeAt(pos) {
        if (this.isEmpty() || pos < 0 || pos >= this.length()) {
            return false;
        }
        this.nodes.splice(pos, 1);
        return true;
    }

    search(key) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].data === key) {
                return i;
            }
        }
        return -1;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        return this.nodes.map(node => String(node.data)).join('');
    }
}

export default LinkedListWithArray;