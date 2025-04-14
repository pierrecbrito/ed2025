import DynamicQueue from '../src/DynamicQueue'; 

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new DynamicQueue() 
    });


    describe('enqueue', () => {
        test('deve adicionar elemento corretamente', () => {
            queue.enqueue(1);
            expect(queue.front()).toBe(1);
        });

        test('deve lançar erro ao tentar adicionar null', () => {
            expect(() => queue.enqueue(null)).toThrow("Null or undefined element");
        });

        test('deve lançar erro ao tentar adicionar undefined', () => {
            expect(() => queue.enqueue(undefined)).toThrow("Null or undefined element");
        });

    });

    describe('dequeue', () => {
        test('deve remover e retornar o primeiro elemento corretamente', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.dequeue()).toBe(1);
        });

        test('deve lançar erro quando a fila está vazia', () => {
            expect(() => queue.dequeue()).toThrow("Queue underflow");
        });
    });

    describe('front', () => {
        test('deve retornar o primeiro elemento sem removê-lo', () => {
            queue.enqueue(1);
            expect(queue.front()).toBe(1);
        });

        test('deve retornar undefined quando a fila está vazia', () => {
            expect(queue.front()).toBeUndefined();
        });
    });

    describe('isEmpty', () => {
        test('deve retornar true quando a fila está vazia', () => {
            expect(queue.isEmpty()).toBe(true);
        });

        test('deve retornar false quando a fila tem elementos', () => {
            queue.enqueue(1);
            expect(queue.isEmpty()).toBe(false);
        });
    });

    describe('clear', () => {
        test('deve limpar a fila corretamente', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.clear();
            expect(queue.isEmpty()).toBe(true);
        });
    });

    describe('toString', () => {
        test('deve retornar representação correta da fila vazia', () => {
            expect(queue.toString()).toBe('[]');
        });

        test('deve retornar representação correta da fila com elementos', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.toString()).toBe('[1, 2]');
        });
    });

    describe('size', () => {
        test('deve retornar o tamanho correto da fila', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.size()).toBe(2);
        });
    });
});

describe('Queue - Edge Cases', () => {
    test('deve lidar com enqueue e dequeue em sequência', () => {
        const queue = new DynamicQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        queue.enqueue(3);
        expect(queue.toString()).toBe('[2, 3]');
    });
});