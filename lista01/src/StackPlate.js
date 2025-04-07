import Stack from "./Stack";

class StackPlate {
    constructor(stackLimit = 3) {
        this.stacks = [new Stack(3)];
        this.indexCurrentStack = 0;
        this.stackLimit = stackLimit;
    }

    push(newElement) {
        if(!this.stacks[this.indexCurrentStack].isFull()) {
            this.stacks[this.indexCurrentStack].push(newElement);
        } else {
            this.stacks.push(new Stack(3));
            this.stacks[++this.indexCurrentStack].push(newElement);
        }
    }

    pop() {
        let top = this.stacks[this.indexCurrentStack].pop();

        if(this.stacks[this.indexCurrentStack].isEmpty()) {
            this.stacks.pop();
            --this.indexCurrentStack
        }
        
        return top;
    }

    toString() {
        return `{${this.stacks.map(s => s.toString()).join(', ')}}`;
    }

}

export default StackPlate;