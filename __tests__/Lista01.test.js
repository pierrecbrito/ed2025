import Stack from "../src/Stack.js";

let s;


describe("Q1. Palavra de forma invertida", () => {

    beforeEach(() => {
        s = new Stack();
    });

    test("Pilha recém-criada deve estar vazia", () => {
        expect(s.isEmpty()).toBe(true);
        expect(s.getTop()).toBeUndefined();
    });


});