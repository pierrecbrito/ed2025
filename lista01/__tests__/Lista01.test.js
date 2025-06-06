import { reverseText, decToBi, verifySequence, shutingYard, removeDuplicates } from "../src/Lista1.js";
import Stack from "../src/Stack.js";
import TwoStacksOneArray  from "../src/TwoStacksOneArray.js";
import StackPlate from "../src/StackPlate.js";


let s;

describe("Q1. Palavra de forma invertida", () => {

    test("Palavra de forma invertida", () => {
        expect(reverseText("ABACAXI")).toBe("IXACABA");
        expect(reverseText("BANANA")).toBe("ANANAB");
        expect(reverseText("Olá, mundo!")).toBe("!odnum ,álO");
        expect(reverseText("abc123")).toBe("321cba");
        expect(reverseText("AbCdEf")).toBe("fEdCbA");
    });

    test("String vazia", () => {
        expect(reverseText("")).toBe("");
    });

    test("String com um caractere", () => {
        expect(reverseText("A")).toBe("A");
    });

    test("String com caracteres especiais", () => {
        expect(reverseText("123!@#")).toBe("#@!321");
    });

    test("String com espaços", () => {
        expect(reverseText("A B C")).toBe("C B A");
    });
});

describe("Q2. 2 pilhas, 1 array", () => {

    beforeEach(() => {
        s = new TwoStacksOneArray();
    });

    test('deve criar duas pilhas vazias com tamanho padrão 5', () => {
        expect(s.isEmptyA()).toBe(true);
        expect(s.isEmptyB()).toBe(true);
        expect(s.size).toBe(5);
        expect(s.getSizeA()).toBe(0);
        expect(s.getSizeB()).toBe(0);
    });

    test('deve criar duas pilhas com tamanho personalizado', () => {
        const customStacks = new TwoStacksOneArray(3);
        expect(customStacks.size).toBe(3);
    });

    test('deve adicionar um item à pilha A', () => {
        s.pushA(1);
        expect(s.getSizeA()).toBe(1);
        expect(s.getTopA()).toBe(1);
    });

    test('deve adicionar um item à pilha B', () => {
        s.pushB(2);
        expect(s.getSizeB()).toBe(1);
        expect(s.getTopB()).toBe(2);
    });

    test('deve lançar erro ao adicionar item inválido em A', () => {
        expect(() => s.pushA(undefined)).toThrow('Novo item inválido');
        expect(() => s.pushA(null)).toThrow('Novo item inválido');
    });

    test('deve lançar erro ao adicionar item inválido em B', () => {
        expect(() => s.pushB(undefined)).toThrow('Novo item inválido');
        expect(() => s.pushB(null)).toThrow('Novo item inválido');
    });

    test('deve lançar erro quando as pilhas estiverem cheias', () => {
        s.pushA(1);
        s.pushA(2);
        s.pushA(3);
        s.pushB(4);
        s.pushB(5)
        expect(() => s.pushB(6)).toThrow('Stack overflow');
    });

    test('deve remover e retornar o item do topo da pilha A', () => {
        s.pushA(1);
        s.pushA(2);
        expect(s.popA()).toBe(2);
        expect(s.getSizeA()).toBe(1);
        expect(s.getTopA()).toBe(1);
    });

    test('deve remover e retornar o item do topo da pilha B', () => {
        s.pushB(1);
        s.pushB(2);
        expect(s.popB()).toBe(2);
        expect(s.getSizeB()).toBe(1);
        expect(s.getTopB()).toBe(1);
    });

    test('deve lançar erro ao remover da pilha A vazia', () => {
        expect(() => s.popA()).toThrow('Stack underflow');
    });

    test('deve lançar erro ao remover da pilha B vazia', () => {
        expect(() => s.popB()).toThrow('Stack underflow');
    });

    test('deve lançar erro ao obter topo da pilha A vazia', () => {
        expect(() => s.getTopA()).toThrow('A stack A está vazia');
    });

    test('deve lançar erro ao obter topo da pilha B vazia', () => {
        expect(() => s.getTopB()).toThrow('A stack B está vazia');
    });

    test('deve retornar o item do topo da pilha A', () => {
        s.pushA(1);
        expect(s.getTopA()).toBe(1);
    });

    test('deve retornar o item do topo da pilha B', () => {
        s.pushB(2);
        expect(s.getTopB()).toBe(2);
    });

    test('deve retornar true para pilha A vazia', () => {
        expect(s.isEmptyA()).toBe(true);
    });

    test('deve retornar true para pilha B vazia', () => {
        expect(s.isEmptyB()).toBe(true);
    });

    test('deve retornar false para pilha A com itens', () => {
        s.pushA(1);
        expect(s.isEmptyA()).toBe(false);
    });

    test('deve retornar false para pilha B com itens', () => {
        s.pushB(1);
        expect(s.isEmptyB()).toBe(false);
    });

    test('deve retornar false quando as pilhas não estão cheias', () => {
        expect(s.isFull()).toBe(false);
    });

    test('deve retornar true quando as pilhas estiverem cheias', () => {
        s.pushA(1);
        s.pushA(2);
        s.pushA(3);
        s.pushB(4);
        s.pushB(5);
        expect(s.isFull()).toBe(true);
    });

    test('deve retornar string vazia entre colchetes para pilhas vazias', () => {
        expect(s.toString()).toBe('A [], B []');
    });

    test('deve retornar string com itens separados por vírgula para ambas pilhas', () => {
        s.pushA(1);
        s.pushA(2);
        s.pushB(3);
        expect(s.toString()).toBe('A [1,2], B [3]');
    });

    test('deve limpar as pilhas', () => {
        s.pushA(1);
        s.pushB(2);
        s.clear();
        expect(s.isEmptyA()).toBe(true);
        expect(s.isEmptyB()).toBe(true);
        expect(s.getSizeA()).toBe(0);
        expect(s.getSizeB()).toBe(0);
    });

    test('deve retornar o tamanho correto da pilha A', () => {
        expect(s.getSizeA()).toBe(0);
        s.pushA(1);
        expect(s.getSizeA()).toBe(1);
        s.pushA(2);
        expect(s.getSizeA()).toBe(2);
    });

    test('deve retornar o tamanho correto da pilha B', () => {
        expect(s.getSizeB()).toBe(0);
        s.pushB(1);
        expect(s.getSizeB()).toBe(1);
        s.pushB(2);
        expect(s.getSizeB()).toBe(2);
    });
});


describe("Q3. Troco do topo com a base", () => {

    beforeEach(() => {
        s = new Stack();
    });

    test("O top da stack deve virar a base", () => {
        s.push(5);
        s.push(4);
        s.push(3);
        s.push(2);
        s.push(1);

        s = s.topToBase();
        expect(s.getTop()).toBe(5);
    });


});

describe("Q4. Decimal para binário", () => {


    test("Testes normais", () => {
        expect(decToBi(5)).toBe("101");
        expect(decToBi(10)).toBe("1010");
        expect(decToBi(13)).toBe("1101");
        expect(decToBi(19)).toBe("10011");
        expect(decToBi(30)).toBe("11110");
        expect(decToBi(42)).toBe("101010");
    });

});

describe("Q5. Sequência de colchetes e parênteses", () => {


    test("Testes normais", () => {
        expect(verifySequence('[()[()]]()')).toBe(true);
        expect(verifySequence('(()]')).toBe(false);
        expect(verifySequence('(()a]')).toBe(false);
    });

});


describe("Q6. Expressão para RPN", () => {


    test("Testes da lista", () => {
        expect(shutingYard('3+4')).toBe('34+');
        expect(shutingYard('3-4+5')).toBe('34-5+');
        expect(shutingYard('((a+b)*(z+x))')).toBe('ab+zx+*');
        expect(shutingYard('((a+t)*((b+(a+c))^(c+d)))')).toBe('at+bac++cd+^*');
        expect(shutingYard('a+b*c-d')).toBe('abc*+d-');
        expect(shutingYard('(a+b)+c/d')).toBe('ab+cd/+');
        expect(shutingYard('a*b-(c-d)+e')).toBe('ab*cd--e+');
    });

});

describe("Q7. Remover duplicados", () => {

    beforeEach(() => {
        s = new Stack(15);
    });


    test("Testes da lista", () => {
        s.push(3);
        s.push(7);
        s.push(3);
        s.push(2);
        s.push(7);
        s.push(1);
        s.push(4);
        s.push(2);
        expect(removeDuplicates(s)).toBe('[3, 7, 2, 1, 4]');
    });

    test("Teste 2", () => {
        s.push(2);
        s.push(2);
        s.push(1);
        s.push(1);
        s.push(3);
        s.push(3);
        expect(removeDuplicates(s)).toBe('[2, 1, 3]');
    });

});

describe("Q8. Stack Plate", () => {

    beforeEach(() => {
        s = new StackPlate();
    });


    test("Stack Plate", () => {
        s.push(3);
        s.push(7);
        s.push(3);
        s.push(2);
        s.push(7);
        s.push(1);
        s.push(4);
        s.push(2);
        expect(s.toString()).toBe('{[3, 7, 3], [2, 7, 1], [4, 2]}');
    });

    test("Testes da lista", () => {
        s.push(5);
        s.push(10);
        s.push(15);
        s.push(20);
        expect(s.toString()).toBe('{[5, 10, 15], [20]}');
        s.pop();
        s.pop();
        expect(s.toString()).toBe('{[5, 10]}');
    });


});