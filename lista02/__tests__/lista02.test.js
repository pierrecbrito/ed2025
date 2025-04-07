import StackWithQueues from "../src/StackWithQueues";
import QueueWithStacks from "../src/QueueWithStacks";
import ConcreteCompanySystem from "../src/ConcreteCompanySystem";

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

describe('ConcreteCompanySystem', () => {
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