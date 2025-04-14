import LinkedList from '../src/LinkedList.js';

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
        });
        test('deve adicionar múltiplos elementos', () => {
            list.append(1);
            list.append(2);
            expect(list.toString()).toBe('12');
        });
    });


    describe('reverse', () => {
        test('deve não alterar lista vazia', () => {
            list.reverse();
            expect(list.isEmpty()).toBe(true);
            expect(list.toString()).toBe('');
        });

        test('deve não alterar lista com um elemento', () => {
            list.append(1);
            list.reverse();
            expect(list.toString()).toBe('1');
            expect(list.length()).toBe(1);
        });

        test('deve inverter lista com dois elementos', () => {
            list.append(1);
            list.append(2);
            list.reverse();
            expect(list.toString()).toBe('21');
            expect(list.length()).toBe(2);
            expect(list.search(2)).toBe(0);
            expect(list.search(1)).toBe(1);
        });

        test('deve inverter lista com múltiplos elementos', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            list.reverse();
            expect(list.toString()).toBe('321');
            expect(list.length()).toBe(3);
            expect(list.search(3)).toBe(0);
            expect(list.search(2)).toBe(1);
            expect(list.search(1)).toBe(2);
        });

        test('deve funcionar com múltiplas inversões', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            list.reverse();
            expect(list.toString()).toBe('321');
            list.reverse();
            expect(list.toString()).toBe('123');
        });

        test('deve manter integridade após operações', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            list.reverse();
            expect(list.toString()).toBe('321');
            list.append(4);
            expect(list.toString()).toBe('3214');
            list.removeFirst();
            expect(list.toString()).toBe('214');
        });
    });
});