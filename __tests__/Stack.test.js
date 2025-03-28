import Stack from "../src/Stack.js";

let s;


describe("Testes da Pilha", () => {

    beforeEach(() => {
        s = new Stack();
    });

    test("Pilha recém-criada deve estar vazia", () => {
        expect(s.isEmpty()).toBe(true);
        expect(s.getTop()).toBeUndefined();
    });

    test("Adicionar elemento torna a pilha não vazia", () => {
        s.push(69);
        expect(s.isEmpty()).toBe(false);
        expect(s.getTop()).toBe(69); 
    });

    test("Pilha atinge capacidade máxima e fica cheia", () => {
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        s.push(5);

        expect(s.isFull()).toBe(true);
        expect(s.getTop()).toBe(5);
    });

    test("Push em pilha cheia lança exceção", () => {
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        s.push(5);

        expect(() => s.push(6)).toThrow("Stack overflow");
    });

    test("Pop remove elementos na ordem LIFO", () => {
        s.push(1);
        s.push(2);
        s.push(3);
        
        expect(s.pop()).toBe(3);
        expect(s.getTop()).toBe(2);
        expect(s.pop()).toBe(2);
        expect(s.getTop()).toBe(1);
        expect(s.pop()).toBe(1);
        expect(s.isEmpty()).toBe(true);
    });

    test("Pop em pilha vazia lança exceção", () => {
        expect(() => s.pop()).toThrow("Stack underflow");
    });

    test("Top em pilha vazia retorna undefined", () => {
        expect(s.getTop()).toBeUndefined();
    });

    test("Verifica tamanho da pilha durante operações", () => {
        expect(s.getSize()).toBe(0);
        s.push(1);
        expect(s.getSize()).toBe(1);
        s.push(2);
        expect(s.getSize()).toBe(2);
        s.pop();
        expect(s.getSize()).toBe(1);
    });
});