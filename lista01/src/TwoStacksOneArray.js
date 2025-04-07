class TwoStacksOneArray {
    constructor(size = 5) {
        this.stack = [];
        this.topA = -1;
        this.topB = size;
        this.size = size;
        this.stack.length = this.size;
    }

    pushA(newItem) {
        if (this.isFull()) throw new Error("Stack overflow");
        if ( !newItem ) throw new Error("Novo item inválido");

        this.topA += 1;
        this.stack[this.topA] = newItem;
    }

    pushB(newItem) {
        if (this.isFull()) throw new Error("Stack overflow");
        if ( !newItem ) throw new Error("Novo item inválido");

        this.topB -= 1;
        this.stack[this.topB] = newItem;
    }

    isFull() {
        return this.topA == this.topB - 1;
    }

    isEmptyA() {
        return this.topA == -1;
    }

    isEmptyB() {
        return this.topB == this.size;
    }

    popA() {
        if (this.isEmptyA()) throw new Error("Stack underflow");

        let val = this.stack[this.topA];
        this.stack[this.topA] = undefined;
        this.topA = this.topA - 1;
        
        return val;
    }

    popB() {
        if (this.isEmptyB()) throw new Error("Stack underflow");

        let val = this.stack[this.topB];
        this.stack[this.topB] = undefined;
        this.topB = this.topB + 1;
        
        return val;
    }

    getTopA() {
        if(this.isEmptyA()) throw new Error('A stack A está vazia');

        return this.stack[this.topA]
    }

    getTopB() {
        if(this.isEmptyB()) throw new Error('A stack B está vazia');

        return this.stack[this.topB]
    }

    getStackA() {
        const stackA = []
        this.stack.forEach((value, index) => {
            if(index <= this.topA) 
                stackA.push(value);
        });
        return stackA;
    }

    getStackB() {
        const stackB = []
        this.stack.forEach((value, index) => { 
            if(index > this.topA && value) 
                stackB.push(value);
        });
        return stackB;
    }

    toString() {
        const stackA = this.getStackA();
        const stackB = this.getStackB();
       
        return `A [${stackA.join(',')}], B [${stackB.join(',')}]`;
    }

    clear() {
        this.stack = [];
        this.topA = -1;
        this.topB = this.size;
    }

    getSizeA() {
        return this.getStackA().length
    }

    getSizeB() {
        return this.getStackB().length
    }
}

export default TwoStacksOneArray;