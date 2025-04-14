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

    toString() {
        return `Node (${this.data}) -> ${this.next ? this.next.toString() : 'END'}`;
    }
}