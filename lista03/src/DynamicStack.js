import LinkedList from './LinkedList.js';

class DynamicStack {
    constructor() {
        this.list = new LinkedList(); 
    }

    push(element) {
        this.list.addAt(element, 0);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const topElement = this.list.getFirst();
        this.list.removeAt(0);
        return topElement;
    }

    top() {
        return this.list.getFirst();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.length();
    }

    toString() {
        return this.list.toString();
    }
}

export default DynamicStack;