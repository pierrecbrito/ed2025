import Queue from "./Queue";

class StackWithQueues {
    constructor(size = 5) {
        this.queue1 = new Queue(size); // Fila principal
        this.queue2 = new Queue(size); // Fila auxiliar
        this.maxSize = size;
    }

    push(element) {
        if (element == null || element == undefined) throw new Error("Null or undefined element");
        if (this.queue1.queue.length === this.maxSize) throw new Error("Stack overflow");

        // Adiciona o novo elemento à queue2
        this.queue2.enqueue(element);

        // Move todos os elementos de queue1 para queue2
        while (!this.queue1.isEmpty()) {
            this.queue2.enqueue(this.queue1.dequeue());
        }

        // Troca as filas: queue2 (com novo elemento no topo) vira queue1
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    pop() {
        if (this.queue1.isEmpty()) throw new Error("Stack underflow");
        return this.queue1.dequeue();
    }

    top() {
        if (this.queue1.isEmpty()) return undefined;
        return this.queue1.front();
    }

    isEmpty() {
        return this.queue1.isEmpty();
    }

    size() {
        return this.queue1.queue.length;
    }

    clear() {
        this.queue1.clear();
        this.queue2.clear();
    }

    toString() {
        return this.queue1.toString();
    }
}

export default StackWithQueues;