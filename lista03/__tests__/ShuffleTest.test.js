import LinkedList from '../src/LinkedList.js';

describe('LinkedList - Shuffle', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });


    describe('shuffle', () => {
        test('deve não alterar lista vazia', () => {
            list.shuffle();
            expect(list.isEmpty()).toBe(true);
            expect(list.toString()).toBe('');
        });

        test('deve não alterar lista com um elemento', () => {
            list.append(1);
            list.shuffle();
            expect(list.toString()).toBe('1');
            expect(list.length()).toBe(1);
        });

        test('deve embaralhar lista com múltiplos elementos', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            list.shuffle();


            expect(list.length()).toBe(3);

            expect(list.search(1)).not.toBe(-1);
            expect(list.search(2)).not.toBe(-1);
            expect(list.search(3)).not.toBe(-1);

            const str = list.toString();
            expect(str.length).toBe(3);
            expect(['123', '132', '213', '231', '312', '321']).toContain(str);
        });

        test('deve manter integridade após operações', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            list.shuffle();
            expect(list.length()).toBe(3);
            list.append(4);
            expect(list.length()).toBe(4);
            expect(list.search(4)).not.toBe(-1);
            list.removeFirst();
            expect(list.length()).toBe(3);
        });

        test('deve produzir diferentes permutações em chamadas sucessivas', () => {
            list.append(1);
            list.append(2);
            list.append(3);
            const results = new Set();
            for (let i = 0; i < 10; i++) {
                list.shuffle();
                results.add(list.toString());
                list.reverse(); 
            }
            expect(results.size).toBeGreaterThan(1);
        });
    });
});