class Stack {
    constructor(size = 5) {
        this.stack = [];
        this.top = undefined;
        this.size = size;
    }

    push(newItem) {
        if ( this.size == this.stack.length) throw new Error("Stack overflow");
        if ( newItem == undefined || newItem == null) throw new Error("Novo item inválido");

        this.stack.push(newItem);
        this.top = newItem;
    }

    pop() {
        if (this.isEmpty()) throw new Error("Stack underflow");

        if (this.stack.length == 1) {
            this.top = undefined;
        } else {
            this.top = this.stack[this.stack.length - 2];
        }
        
        return this.stack.pop();
    }

    getTop() {
        return this.top;
    }

    isEmpty() {
        return this.top == undefined;
    }

    isFull() {
        return this.stack.length == this.size;
    }

    toString() {
        return `[${this.stack.join(', ')}]`;
    }

    clear() {
        this.stack = [];
        this.top = undefined;
    }

    topToBase() {
        const stackAux = new Stack();
        
        while(!this.isEmpty()) {
            stackAux.push(this.pop());
        }

        return stackAux;
    }

    getSize() {
        return this.stack.length;
    }

    includes(element) {
        return this.stack.includes(element);
    }
}

export default Stack;