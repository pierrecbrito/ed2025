import Node from "./Node";

class LinkedList {
    constructor() {
        this.head = new Node();
    }

    append(newElement) {
        const newNode = new Node(elemento);
        if (this.isEmpty()) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.hasNext()) {
            current = current.getNext();
        }
        current.setNext(newNode);
    }

    removeLast() {
        if (!this.isEmpty()) {
            if (!this.head.hasNext()) {
                this.head = undefined; 
                return;
            }
            let node_a = this.head;
            let node_b = this.head.getNext();
            while (node_b.hasNext()) {
                node_a = node_b;
                node_b = node_b.getNext();
            }
            node_a.setNext(undefined);
        }
    }

    removeFirst() {
        if (!this.isEmpty()) {
            this.head = this.head.getNext(); 
        }
    }
    isEmpty() {
        return this.head.getNext() === undefined;
    }

    length() {
        let result = 0;
        let current = this.head;
        while (current !== undefined) {
            result++;
            current = current.getNext();
        }
        return result;
    }
    
    addAt(newElement, pos) {
        if (pos < 0 || pos > this.length()) {
            return false; a
        }
        const newNode = new Node(newElement);
        if (pos === 0) {
            newNode.setNext(this.head);
            this.head = newNode;
            return true;
        }
        let current = this.head;
        for (let i = 0; i < pos - 1; i++) {
            if (current === undefined) return false;
            current = current.getNext();
        }
        newNode.setNext(current.getNext());
        current.setNext(newNode);
        return true;
    }

    removeAt(pos) {
        if (this.isEmpty() || pos < 0 || pos >= this.length()) {
            return false; // Lista vazia ou posição inválida
        }
        if (pos === 0) {
            this.head = this.head.getNext();
            return true;
        }
        let current = this.head;
        for (let i = 0; i < pos - 1; i++) {
            if (current === undefined) return false; // Não deve acontecer
            current = current.getNext();
        }
        if (current.getNext() === undefined) return false; // Não deve acontecer
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
        let result = '';
        let current = this.head;
        while (current !== undefined) {
            result += current.data;
            current = current.getNext();
        }
        return result;
    }
}

export default LinkedList;