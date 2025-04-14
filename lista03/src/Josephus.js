import LinkedList from './LinkedList.js';

class Josephus {
    constructor() {
        this.list = new LinkedList();
    }

    solve(N, D) {
        if (N <= 0 || D <= 0 || D >= N) {
            return { order: [], survivor: null };
        }

        this.list = new LinkedList();
        for (let i = 1; i <= N; i++) {
            this.list.append(i);
        }

        if (N === 1) {
            const survivor = this.list.head.data;
            return { order: [survivor], survivor };
        }

        let current = this.list.head;
        while (current.hasNext()) {
            current = current.getNext();
        }
        current.setNext(this.list.head); 

        const order = [];
        current = this.list.head;
        let prev = null;
        let size = N;

        while (size > 1) {
            // Count D-1 steps
            for (let i = 1; i < D; i++) {
                prev = current;
                current = current.getNext();
            }

            order.push(current.data);
            prev.setNext(current.getNext());
            current = current.getNext();
            size--;

            if (current.data === this.list.head.data && size > 1) {
                this.list.head = current.getNext();
            }
        }

        const survivor = current.data;
        order.push(survivor); 

        current.setNext(null);

        return { order, survivor };
    }
}

export default Josephus;