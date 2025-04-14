import StringLinkedList from '../src/StringLinkedList.js';

describe('StringLinkedList', () => {
    let strList;

    describe('constructor', () => {
        test('deve criar lista vazia por padrão', () => {
            strList = new StringLinkedList();
            expect(strList.toString()).toBe('');
            expect(strList.length()).toBe(0);
            expect(strList.isEmpty()).toBe(true);
        });

        test('deve criar lista com string fornecida', () => {
            strList = new StringLinkedList('abc');
            expect(strList.toString()).toBe('abc');
            expect(strList.length()).toBe(3);
            expect(strList.isEmpty()).toBe(false);
        });
    });

    describe('substring', () => {
        beforeEach(() => {
            strList = new StringLinkedList('hello');
        });

        test('deve retornar sublista correta para intervalo válido', () => {
            let sub = strList.substring(1, 3);
            expect(sub.toString()).toBe('ell');
            expect(sub.length()).toBe(3);
        });

        test('deve retornar lista completa para intervalo total', () => {
            let sub = strList.substring(0, 4);
            expect(sub.toString()).toBe('hello');
            expect(sub.length()).toBe(5);
        });

        test('deve retornar um caractere para A igual a B', () => {
            let sub = strList.substring(2, 2);
            expect(sub.toString()).toBe('l');
            expect(sub.length()).toBe(1);
        });

        test('deve retornar lista vazia para A < 0', () => {
            let sub = strList.substring(-1, 2);
            expect(sub.toString()).toBe('');
            expect(sub.length()).toBe(0);
        });

        test('deve retornar lista vazia para B < 0', () => {
            let sub = strList.substring(0, -1);
            expect(sub.toString()).toBe('');
            expect(sub.length()).toBe(0);
        });

        test('deve retornar lista vazia para A > B', () => {
            let sub = strList.substring(3, 1);
            expect(sub.toString()).toBe('');
            expect(sub.length()).toBe(0);
        });

        test('deve retornar lista vazia para A >= comprimento', () => {
            let sub = strList.substring(5, 6);
            expect(sub.toString()).toBe('');
            expect(sub.length()).toBe(0);
        });

        test('deve truncar até o final se B >= comprimento', () => {
            let sub = strList.substring(3, 10);
            expect(sub.toString()).toBe('lo');
            expect(sub.length()).toBe(2);
        });

        test('deve retornar lista vazia para lista vazia', () => {
            strList = new StringLinkedList();
            let sub = strList.substring(0, 1);
            expect(sub.toString()).toBe('');
            expect(sub.length()).toBe(0);
        });
    });

    describe('toString', () => {
        test('deve retornar string vazia para lista vazia', () => {
            strList = new StringLinkedList();
            expect(strList.toString()).toBe('');
        });

        test('deve retornar string correta para lista não vazia', () => {
            strList = new StringLinkedList('test');
            expect(strList.toString()).toBe('test');
        });
    });

    describe('length', () => {
        test('deve retornar 0 para lista vazia', () => {
            strList = new StringLinkedList();
            expect(strList.length()).toBe(0);
        });

        test('deve retornar comprimento correto', () => {
            strList = new StringLinkedList('abc');
            expect(strList.length()).toBe(3);
        });
    });

    describe('isEmpty', () => {
        test('deve retornar true para lista vazia', () => {
            strList = new StringLinkedList();
            expect(strList.isEmpty()).toBe(true);
        });

        test('deve retornar false para lista não vazia', () => {
            strList = new StringLinkedList('a');
            expect(strList.isEmpty()).toBe(false);
        });
    });
});