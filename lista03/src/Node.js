class Node {
    constructor(data) {
        this.data = data;
        this.next = undefined;
    }

    setNext(next) {
        this.next = next;
    }

    getNext() {
        return this.next;
    }

    hasNext() {
        return this.next != undefined;
    }

    toString() {
        return `Node (${this.data}) -> ${this.next ? this.next.toString() : 'END'}`;
    }
}

export default Node;