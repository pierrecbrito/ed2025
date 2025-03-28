import { reverseText } from "../src/Lista1.js";
let s;


describe("Q1. Palavra de forma invertida", () => {

    test("Palavra de forma invertida", () => {
        expect(reverseText("ABACAXI")).toBe("IXACABA");
        expect(reverseText("BANANA")).toBe("ANANAB");
    });

});