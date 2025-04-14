import Josephus from '../src/Josephus.js';

describe('Josephus', () => {
    let josephus;

    beforeEach(() => {
        josephus = new Josephus();
    });

    describe('solve', () => {
        test('deve resolver caso histórico: N=41, D=3', () => {
            const result = josephus.solve(41, 3);
            expect(result.order.length).toBe(41);
            expect(result.survivor).toBe(31);
            expect(result.order[result.order.length - 1]).toBe(31);
            expect(result.order[0]).toBe(3);
            expect(new Set(result.order).size).toBe(41); 
        });

        test('deve resolver caso simples: N=5, D=2', () => {
            const result = josephus.solve(5, 2);
            expect(result.order).toEqual([2, 4, 1, 5, 3]);
            expect(result.survivor).toBe(3);
            expect(result.order.length).toBe(5);
        });


        test('deve retornar resultado vazio para N<=0', () => {
            const result = josephus.solve(0, 3);
            expect(result.order).toEqual([]);
            expect(result.survivor).toBe(null);
        });

        test('deve retornar resultado vazio para D<=0', () => {
            const result = josephus.solve(5, 0);
            expect(result.order).toEqual([]);
            expect(result.survivor).toBe(null);
        });

        test('deve retornar resultado vazio para D>=N', () => {
            const result = josephus.solve(5, 5);
            expect(result.order).toEqual([]);
            expect(result.survivor).toBe(null);
        });

        test('deve manter ordem correta para N=7, D=3', () => {
            const result = josephus.solve(7, 3);
            expect(result.order).toEqual([3, 6, 2, 7, 5, 1, 4]);
            expect(result.survivor).toBe(4);
        });

        test('deve garantir que todos os soldados apareçam na ordem', () => {
            const result = josephus.solve(10, 4);
            expect(result.order.length).toBe(10);
            expect(new Set(result.order).size).toBe(10);
            expect(result.order.includes(result.survivor)).toBe(true);
        });
    });
});