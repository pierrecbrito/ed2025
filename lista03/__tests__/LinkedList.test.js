import LinkedList from '../src/LinkedList.js';
import Node from '../src/Node.js';

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    describe('isEmpty', () => {
        test('deve retornar true para lista vazia', () => {
            expect(list.isEmpty()).toBe(true);
        });

        test('deve retornar false após adicionar um elemento', () => {
            list.append(1);
            expect(list.isEmpty()).toBe(false);
        });
    });

    describe('append', () => {
        test('deve adicionar elemento em lista vazia', () => {
            list.append(1);
            expect(list.toString()).toBe('1');
            expect(list.length()).toBe(1);
        });

        test('deve adicionar múltiplos elementos no final', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.toString()).toBe('123');
            expect(list.length()).toBe(3);
        });
    });

    describe('removeLast', () => {
        test('não deve fazer nada em lista vazia', () => {
            list.removeLast();
            expect(list.isEmpty()).toBe(true);
        });

        test('deve remover único elemento', () => {
            list.append(1);
            list.removeLast();
            expect(list.isEmpty()).toBe(true);
            expect(list.toString()).toBe('');
        });

        test('deve remover último elemento de lista com múltiplos nós', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            list.removeLast();
            expect(list.toString()).toBe('12');
            expect(list.length()).toBe(2);
        });
    });

    describe('removeFirst', () => {
        test('não deve fazer nada em lista vazia', () => {
            list.removeFirst();
            expect(list.isEmpty()).toBe(true);
        });

        test('deve remover único elemento', () => {
            list.append(1);
            list.removeFirst();
            expect(list.isEmpty()).toBe(true);
            expect(list.toString()).toBe('');
        });

        test('deve remover primeiro elemento de lista com múltiplos nós', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            list.removeFirst();
            expect(list.toString()).toBe('23');
            expect(list.length()).toBe(2);
        });
    });

    describe('length', () => {
        test('deve retornar 0 para lista vazia', () => {
            expect(list.length()).toBe(0);
        });

        test('deve retornar tamanho correto após adicionar elementos', () => {
            list.append(1);
            list.append(2);
            expect(list.length()).toBe(2);
        });

        test('deve atualizar após remoções', () => {
            list.append(1);
            list.append(2);
            list.removeFirst();
            expect(list.length()).toBe(1);
        });
    });

    describe('addAt', () => {
        test('deve retornar false para posição negativa', () => {
            expect(list.addAt(1, -1)).toBe(false);
        });

        test('deve retornar false para posição maior que tamanho', () => {
            list.append(1);
            expect(list.addAt(2, 2)).toBe(false);
        });

        test('deve adicionar na posição 0 em lista vazia', () => {
            expect(list.addAt(1, 0)).toBe(true);
            expect(list.toString()).toBe('1');
            expect(list.length()).toBe(1);
        });

        test('deve adicionar no início de lista não vazia', () => {
            list.append(2);
            expect(list.addAt(1, 0)).toBe(true);
            expect(list.toString()).toBe('12');
        });

        test('deve adicionar no final', () => {
            list.append(1);
            expect(list.addAt(2, 1)).toBe(true);
            expect(list.toString()).toBe('12');
        });

        test('deve adicionar no meio', () => {
            list.append(1);
            list.append(3);
            expect(list.addAt(2, 1)).toBe(true);
            expect(list.toString()).toBe('123');
        });
    });

    describe('removeAt', () => {
        test('deve retornar false para lista vazia', () => {
            expect(list.removeAt(0)).toBe(false);
        });

        test('deve retornar false para posição negativa', () => {
            list.append(1);
            expect(list.removeAt(-1)).toBe(false);
        });

        test('deve retornar false para posição fora do tamanho', () => {
            list.append(1);
            expect(list.removeAt(1)).toBe(false);
        });

        test('deve remover na posição 0', () => {
            list.append(1);
            list.append(2);
            expect(list.removeAt(0)).toBe(true);
            expect(list.toString()).toBe('2');
        });

        test('deve remover no final', () => {
            list.append(1);
            list.append(2);
            expect(list.removeAt(1)).toBe(true);
            expect(list.toString()).toBe('1');
        });

        test('deve remover no meio', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.removeAt(1)).toBe(true);
            expect(list.toString()).toBe('13');
        });
    });

    describe('search', () => {
        test('deve retornar -1 para lista vazia', () => {
            expect(list.search(1)).toBe(-1);
        });

        test('deve retornar -1 para elemento não encontrado', () => {
            list.append(1);
            list.append(2);
            expect(list.search(3)).toBe(-1);
        });

        test('deve encontrar elemento no início', () => {
            list.append(1);
            list.append(2);
            expect(list.search(1)).toBe(0);
        });

        test('deve encontrar elemento no final', () => {
            list.append(1);
            list.append(2);
            expect(list.search(2)).toBe(1);
        });

        test('deve encontrar elemento no meio', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.search(2)).toBe(1);
        });
    });

    describe('toString', () => {
        test('deve retornar string vazia para lista vazia', () => {
            expect(list.toString()).toBe('');
        });

        test('deve retornar string correta para um elemento', () => {
            list.append(1);
            expect(list.toString()).toBe('1');
        });

        test('deve retornar string correta para múltiplos elementos', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.toString()).toBe('123');
        });

        test('deve funcionar com diferentes tipos de dados', () => {
            list.append('a');
            list.append(1);
            list.append(true);
            expect(list.toString()).toBe('a1true');
        });
    });
});