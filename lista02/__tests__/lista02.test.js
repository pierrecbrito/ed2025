import StackWithQueues from "../src/StackWithQueues";
import QueueWithStacks from "../src/QueueWithStacks";
import ConcreteCompanySystem from "../src/ConcreteCompanySystem";
import Queue from "../src/Queue";
import { interleaveQueues, reverseQueue } from "../src/lista02";
import Deque from "../src/Deque";

describe('Q1', () => {
    let stack;

    beforeEach(() => {
        stack = new StackWithQueues(3); 
    });

    describe('constructor', () => {
        test('deve criar uma pilha vazia com tamanho especificado', () => {
            expect(stack.isEmpty()).toBe(true);
            expect(stack.maxSize).toBe(3);
        });
    });

    describe('push', () => {
        test('deve adicionar elemento corretamente', () => {
            stack.push(1);
            expect(stack.top()).toBe(1);
            expect(stack.size()).toBe(1);
        });

        test('deve manter ordem LIFO', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.top()).toBe(2);
            expect(stack.size()).toBe(2);
        });

        test('deve lançar erro ao adicionar null', () => {
            expect(() => stack.push(null)).toThrow("Null or undefined element");
        });

        test('deve lançar erro quando a pilha está cheia', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(() => stack.push(4)).toThrow("Stack overflow");
        });
    });

    describe('pop', () => {
        test('deve remover e retornar o elemento do topo', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.pop()).toBe(2);
            expect(stack.top()).toBe(1);
            expect(stack.size()).toBe(1);
        });

        test('deve lançar erro quando a pilha está vazia', () => {
            expect(() => stack.pop()).toThrow("Stack underflow");
        });
    });

    describe('top', () => {
        test('deve retornar o elemento do topo sem removê-lo', () => {
            stack.push(1);
            expect(stack.top()).toBe(1);
            expect(stack.size()).toBe(1);
        });

        test('deve retornar undefined quando a pilha está vazia', () => {
            expect(stack.top()).toBeUndefined();
        });
    });

    describe('isEmpty', () => {
        test('deve retornar true quando a pilha está vazia', () => {
            expect(stack.isEmpty()).toBe(true);
        });

        test('deve retornar false quando a pilha tem elementos', () => {
            stack.push(1);
            expect(stack.isEmpty()).toBe(false);
        });
    });

    describe('size', () => {
        test('deve retornar o tamanho correto da pilha', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.size()).toBe(2);
        });
    });

    describe('clear', () => {
        test('deve limpar a pilha corretamente', () => {
            stack.push(1);
            stack.push(2);
            stack.clear();
            expect(stack.isEmpty()).toBe(true);
            expect(stack.size()).toBe(0);
        });
    });

    describe('toString', () => {
        test('deve retornar representação correta da pilha', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.toString()).toBe('[2, 1]'); 
        });
    });
});

describe("Q2", () => {
    let queue;

    beforeEach(() => {
        queue = new QueueWithStacks(3); // Fila com tamanho máximo 3
    });

    describe('constructor', () => {
        test('deve criar uma fila vazia com tamanho especificado', () => {
            expect(queue.isEmpty()).toBe(true);
            expect(queue.maxSize).toBe(3);
        });
    });

    describe('enqueue', () => {
        test('deve adicionar elemento corretamente', () => {
            queue.enqueue(1);
            expect(queue.size()).toBe(1);
            expect(queue.front()).toBe(1);
        });

        test('deve adicionar múltiplos elementos na ordem correta', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.front()).toBe(1);
            expect(queue.size()).toBe(2);
        });

        test('deve lançar erro ao adicionar null', () => {
            expect(() => queue.enqueue(null)).toThrow("Null or undefined element");
        });

        test('deve lançar erro quando a fila está cheia', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            expect(() => queue.enqueue(4)).toThrow("Queue overflow");
        });
    });

    describe('dequeue', () => {
        test('deve remover e retornar o primeiro elemento', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.dequeue()).toBe(1);
            expect(queue.front()).toBe(2);
            expect(queue.size()).toBe(1);
        });

        test('deve lançar erro quando a fila está vazia', () => {
            expect(() => queue.dequeue()).toThrow("Queue underflow");
        });
    });

    describe('front', () => {
        test('deve retornar o primeiro elemento sem removê-lo', () => {
            queue.enqueue(1);
            expect(queue.front()).toBe(1);
            expect(queue.size()).toBe(1);
        });

        test('deve retornar undefined quando a fila está vazia', () => {
            expect(queue.front()).toBeUndefined();
        });

        test('deve manter a ordem FIFO após múltiplos enqueues', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.front()).toBe(1);
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

    describe('size', () => {
        test('deve retornar o tamanho correto da fila', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.size()).toBe(2);
        });

        test('deve atualizar após dequeue', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.dequeue();
            expect(queue.size()).toBe(1);
        });
    });

    describe('clear', () => {
        test('deve limpar a fila corretamente', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.clear();
            expect(queue.isEmpty()).toBe(true);
            expect(queue.size()).toBe(0);
        });
    });

    describe('toString', () => {
        test('deve retornar representação correta da fila vazia', () => {
            expect(queue.toString()).toBe('[]');
        });

        test('deve retornar representação correta da fila com elementos', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.toString()).toBe('[2, 1]');
        });
    });

    describe('Edge Cases', () => {
        test('deve manter FIFO com enqueues e dequeues misturados', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.dequeue()).toBe(1);
            queue.enqueue(3);
            expect(queue.front()).toBe(2);
            expect(queue.dequeue()).toBe(2);
            expect(queue.front()).toBe(3);
        });
    });
});

describe('Q3', () => {
    let system;

    beforeEach(() => {
        system = new ConcreteCompanySystem(3); // Usando limite 3 para testes mais rápidos
    });

    describe('constructor', () => {
        test('deve inicializar com fila vazia e contador zerado', () => {
            expect(system.hasWaitingDrivers()).toBe(false);
            expect(system.loadsCompleted).toBe(0);
            expect(system.maxLoadsPerDay).toBe(3);
        });
    });

    describe('addTruckDriver', () => {
        test('deve adicionar um caminhoneiro à fila corretamente', () => {
            const result = system.addTruckDriver("João");
            expect(result).toBe("João adicionado à fila de espera");
            expect(system.waitingQueue.size()).toBe(1);
            expect(system.waitingQueue.front()).toBe("João");
        });

        test('deve adicionar múltiplos caminhoneiros na ordem de chegada', () => {
            system.addTruckDriver("João");
            system.addTruckDriver("Pedro");
            expect(system.waitingQueue.size()).toBe(2);
            expect(system.waitingQueue.front()).toBe("João");
        });

        test('deve lançar erro quando o limite diário é atingido', () => {
            system.addTruckDriver("João");
            system.removeTruckDriver();
            system.addTruckDriver("Pedro");
            system.removeTruckDriver();
            system.addTruckDriver("Carlos");
            system.removeTruckDriver();
            expect(() => system.addTruckDriver("Maria")).toThrow("Limite de carregamentos do dia atingido");
        });

        test('deve lançar erro ao adicionar null', () => {
            expect(() => system.addTruckDriver(null)).toThrow("Null or undefined element");
        });
    });

    describe('removeTruckDriver', () => {
        test('deve remover o primeiro caminhoneiro e incrementar contador', () => {
            system.addTruckDriver("João");
            system.addTruckDriver("Pedro");
            const result = system.removeTruckDriver();
            expect(result).toBe("João foi atendido e saiu com o carregamento (1/3)");
            expect(system.waitingQueue.front()).toBe("Pedro");
            expect(system.loadsCompleted).toBe(1);
            expect(system.waitingQueue.size()).toBe(1);
        });

        test('deve lançar erro quando a fila está vazia', () => {
            expect(() => system.removeTruckDriver()).toThrow("Nenhum caminhoneiro na fila de espera");
        });

        test('deve lançar erro quando o limite diário é atingido', () => {
            system.addTruckDriver("João");
            system.removeTruckDriver();
            system.addTruckDriver("Pedro");
            system.removeTruckDriver();
            system.addTruckDriver("Carlos");
            system.removeTruckDriver();
            expect(() => system.removeTruckDriver()).toThrow("Limite de carregamentos do dia atingido");
        });
    });

    describe('hasWaitingDrivers', () => {
        test('deve retornar false quando a fila está vazia', () => {
            expect(system.hasWaitingDrivers()).toBe(false);
        });

        test('deve retornar true quando há caminhoneiros na fila', () => {
            system.addTruckDriver("João");
            expect(system.hasWaitingDrivers()).toBe(true);
        });

        test('deve retornar false após remover todos os caminhoneiros', () => {
            system.addTruckDriver("João");
            system.removeTruckDriver();
            expect(system.hasWaitingDrivers()).toBe(false);
        });
    });

    describe('isDailyLimitReached', () => {
        test('deve retornar false antes de atingir o limite', () => {
            system.addTruckDriver("João");
            system.removeTruckDriver();
            expect(system.isDailyLimitReached()).toBe(false);
        });

        test('deve retornar true após atingir o limite', () => {
            system.addTruckDriver("João");
            system.removeTruckDriver();
            system.addTruckDriver("Pedro");
            system.removeTruckDriver();
            system.addTruckDriver("Carlos");
            system.removeTruckDriver();
            expect(system.isDailyLimitReached()).toBe(true);
        });
    });

    describe('listWaitingDrivers', () => {
        test('deve retornar mensagem quando não há caminhoneiros', () => {
            expect(system.listWaitingDrivers()).toBe("Nenhum caminhoneiro na fila de espera");
        });

        test('deve listar caminhoneiros na ordem de chegada', () => {
            system.addTruckDriver("João");
            system.addTruckDriver("Pedro");
            expect(system.listWaitingDrivers()).toBe("Caminhoneiros aguardando: [João, Pedro]");
        });

        test('deve atualizar após remoção', () => {
            system.addTruckDriver("João");
            system.addTruckDriver("Pedro");
            system.removeTruckDriver();
            expect(system.listWaitingDrivers()).toBe("Caminhoneiros aguardando: [Pedro]");
        });
    });

    describe('resetDay', () => {
        test('deve resetar a fila e o contador de carregamentos', () => {
            system.addTruckDriver("João");
            system.removeTruckDriver();
            system.addTruckDriver("Pedro");
            const result = system.resetDay();
            expect(result).toBe("Sistema resetado para um novo dia");
            expect(system.hasWaitingDrivers()).toBe(false);
            expect(system.loadsCompleted).toBe(0);
            expect(system.isDailyLimitReached()).toBe(false);
        });
    });

    describe('Cenários Combinados', () => {
        test('deve gerenciar chegadas e saídas corretamente até o limite', () => {
            system.addTruckDriver("João");
            system.addTruckDriver("Pedro");
            system.addTruckDriver("Carlos");
            expect(system.removeTruckDriver()).toBe("João foi atendido e saiu com o carregamento (1/3)");
            expect(system.removeTruckDriver()).toBe("Pedro foi atendido e saiu com o carregamento (2/3)");
            expect(system.removeTruckDriver()).toBe("Carlos foi atendido e saiu com o carregamento (3/3)");
            expect(system.isDailyLimitReached()).toBe(true);
            expect(() => system.addTruckDriver("Maria")).toThrow("Limite de carregamentos do dia atingido");
        });

        test('deve permitir novo dia após reset', () => {
            system.addTruckDriver("João");
            system.removeTruckDriver();
            system.resetDay();
            system.addTruckDriver("Maria");
            expect(system.listWaitingDrivers()).toBe("Caminhoneiros aguardando: [Maria]");
            expect(system.removeTruckDriver()).toBe("Maria foi atendido e saiu com o carregamento (1/3)");
        });
    });
});

describe('Q4', () => {
    let queue1, queue2;

    beforeEach(() => {
        queue1 = new Queue(5);
        queue2 = new Queue(5);
    });

    test('deve intercalar duas filas de mesmo tamanho', () => {
        queue1.enqueue("A");
        queue1.enqueue("B");
        queue2.enqueue(1);
        queue2.enqueue(2);
        
        const result = interleaveQueues(queue1, queue2);
        expect(result.toString()).toBe("[A, 1, B, 2]");
        expect(result.size()).toBe(4);
    });

    test('deve intercalar quando a primeira fila é maior', () => {
        queue1.enqueue("A");
        queue1.enqueue("B");
        queue1.enqueue("C");
        queue2.enqueue(1);
        
        const result = interleaveQueues(queue1, queue2);
        expect(result.toString()).toBe("[A, 1, B, C]");
        expect(result.size()).toBe(4);
    });

    test('deve intercalar quando a segunda fila é maior', () => {
        queue1.enqueue("A");
        queue2.enqueue(1);
        queue2.enqueue(2);
        queue2.enqueue(3);
        
        const result = interleaveQueues(queue1, queue2);
        expect(result.toString()).toBe("[A, 1, 2, 3]");
        expect(result.size()).toBe(4);
    });

    test('deve retornar fila vazia quando ambas as filas estão vazias', () => {
        const result = interleaveQueues(queue1, queue2);
        expect(result.toString()).toBe("[]");
        expect(result.isEmpty()).toBe(true);
    });

    test('deve intercalar corretamente quando uma fila está vazia', () => {
        queue1.enqueue("A");
        queue1.enqueue("B");
        
        const result = interleaveQueues(queue1, queue2);
        expect(result.toString()).toBe("[A, B]");
        expect(result.size()).toBe(2);
    });

    test('deve manter a ordem FIFO das filas originais', () => {
        queue1.enqueue("A");
        queue1.enqueue("B");
        queue2.enqueue(1);
        queue2.enqueue(2);
        
        const result = interleaveQueues(queue1, queue2);
        expect(result.dequeue()).toBe("A");
        expect(result.dequeue()).toBe(1);
        expect(result.dequeue()).toBe("B");
        expect(result.dequeue()).toBe(2);
    });

    test('deve funcionar com tipos de dados mistos', () => {
        queue1.enqueue("A");
        queue1.enqueue(10);
        queue2.enqueue(true);
        queue2.enqueue("Z");
        
        const result = interleaveQueues(queue1, queue2);
        expect(result.toString()).toBe("[A, true, 10, Z]");
    });
});

describe('Q5', () => {
    let deque;

    beforeEach(() => {
        deque = new Deque(3);
    });

    describe('constructor', () => {
        test('deve instanciar e inicializar um deque vazio', () => {
            expect(deque.isEmpty()).toBe(true);
            expect(deque.size()).toBe(0);
            expect(deque.maxSize).toBe(3);
        });
    });

    describe('addFront', () => {
        test('deve inserir elemento no início', () => {
            deque.addFront(1);
            expect(deque.toString()).toBe("[1]");
            expect(deque.size()).toBe(1);
        });

        test('deve inserir múltiplos elementos no início', () => {
            deque.addFront(1);
            deque.addFront(2);
            expect(deque.toString()).toBe("[2, 1]");
            expect(deque.size()).toBe(2);
        });

        test('deve lançar erro ao inserir null', () => {
            expect(() => deque.addFront(null)).toThrow("Null or undefined element");
        });

        test('deve lançar erro quando o deque está cheio', () => {
            deque.addFront(1);
            deque.addFront(2);
            deque.addFront(3);
            expect(() => deque.addFront(4)).toThrow("Deque overflow");
        });
    });

    describe('removeFront', () => {
        test('deve remover e retornar o elemento do início', () => {
            deque.addFront(1);
            deque.addFront(2);
            expect(deque.removeFront()).toBe(2);
            expect(deque.toString()).toBe("[1]");
            expect(deque.size()).toBe(1);
        });

        test('deve lançar erro quando o deque está vazio', () => {
            expect(() => deque.removeFront()).toThrow("Deque underflow");
        });
    });

    describe('addRear', () => {
        test('deve inserir elemento no fim', () => {
            deque.addRear(1);
            expect(deque.toString()).toBe("[1]");
            expect(deque.size()).toBe(1);
        });

        test('deve inserir múltiplos elementos no fim', () => {
            deque.addRear(1);
            deque.addRear(2);
            expect(deque.toString()).toBe("[1, 2]");
            expect(deque.size()).toBe(2);
        });

        test('deve lançar erro ao inserir null', () => {
            expect(() => deque.addRear(null)).toThrow("Null or undefined element");
        });

        test('deve lançar erro quando o deque está cheio', () => {
            deque.addRear(1);
            deque.addRear(2);
            deque.addRear(3);
            expect(() => deque.addRear(4)).toThrow("Deque overflow");
        });
    });

    describe('removeRear', () => {
        test('deve remover e retornar o elemento do fim', () => {
            deque.addRear(1);
            deque.addRear(2);
            expect(deque.removeRear()).toBe(2);
            expect(deque.toString()).toBe("[1]");
            expect(deque.size()).toBe(1);
        });

        test('deve lançar erro quando o deque está vazio', () => {
            expect(() => deque.removeRear()).toThrow("Deque underflow");
        });
    });

    describe('operações combinadas', () => {
        test('deve suportar inserções e remoções em ambas as extremidades', () => {
            deque.addFront(1);
            deque.addRear(2);
            deque.addFront(3);
            expect(deque.toString()).toBe("[3, 1, 2]");
            expect(deque.removeFront()).toBe(3);
            expect(deque.removeRear()).toBe(2);
            expect(deque.toString()).toBe("[1]");
        });
    });
});

describe('Q6', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue(5);
    });

    test('deve reverter uma fila com múltiplos elementos', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        const reversed = reverseQueue(queue);
        expect(reversed.toString()).toBe('[3, 2, 1]');
    });

    test('deve reverter uma fila com um elemento', () => {
        queue.enqueue(1);
        const reversed = reverseQueue(queue);
        expect(reversed.toString()).toBe('[1]');
    });

    test('deve retornar fila vazia quando a entrada está vazia', () => {
        const reversed = reverseQueue(queue);
        expect(reversed.toString()).toBe('[]');
    });

    test('deve manter o tamanho máximo da fila original', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        const reversed = reverseQueue(queue);
        expect(reversed.limit).toBe(5);
    });

    test('deve reverter corretamente a ordem de saída', () => {
        queue.enqueue("A");
        queue.enqueue("B");
        queue.enqueue("C");
        const reversed = reverseQueue(queue);
        expect(reversed.dequeue()).toBe("C");
        expect(reversed.dequeue()).toBe("B");
        expect(reversed.dequeue()).toBe("A");
    });
});