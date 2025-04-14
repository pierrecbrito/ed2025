import LinkedList from './LinkedList.js';

class DynamicStack {
    constructor() {
        this.list = new LinkedList();
        this.top = undefined;
    }

    push(newItem) {
        if (newItem === undefined || newItem === null) {
            throw new Error("Novo item inválido");
        }
        this.list.addAt(newItem, 0); // Add at the beginning (top)
        this.top = newItem;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow");
        }
        // Get the top element directly from head
        const popped = this.list.head.data;
        this.list.removeAt(0); // Remove top element
        // Update this.top
        if (this.list.isEmpty()) {
            this.top = undefined;
        } else {
            this.top = this.list.head.data; // New top is the next head
        }
        return popped;
    }

    getTop() {
        return this.top;
    }

    isEmpty() {
        return this.top === undefined;
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

    clear() {
        this.list.clear();
        this.top = undefined;
    }

    topToBase() {
        const stackAux = new DynamicStack();
        while (!this.isEmpty()) {
            stackAux.push(this.pop());
        }
        return stackAux;
    }

    getSize() {
        return this.list.length();
    }

    includes(element) {
        let current = this.list.head;
        while (current !== undefined) {
            if (current.data === element) {
                return true;
            }
            current = current.getNext();
        }
        return false;
    }
}

export default DynamicStack;