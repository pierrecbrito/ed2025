import { reverseText } from "../src/Lista1.js";
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