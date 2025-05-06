const bubbleSort = require('../src/Bubble.js');

describe('BubbleSort', () => {

  test('deve lidar com uma lista vazia', () => {
    const lista = [];
    const resultado = bubbleSort(lista);
    expect(resultado).toEqual([]);
  });

  test('deve ordenar uma lista desordenada', () => {
    const lista = [5, 3, 8, 4, 2];
    const resultado = bubbleSort([...lista]); 
    expect(resultado).toEqual([2, 3, 4, 5, 8]);
  });

  test('deve manter uma lista já ordenada', () => {
    const lista = [1, 2, 3, 4, 5];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });

  test('deve ordenar uma lista em ordem decrescente', () => {
    const lista = [5, 4, 3, 2, 1];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });

  test('deve lidar com elementos duplicados', () => {
    const lista = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  test('deve lidar com uma lista de um elemento', () => {
    const lista = [42];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([42]);
  });

  test('deve ordenar uma lista com números negativos', () => {
    const lista = [-3, 5, -1, 0, -10, 2];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([-10, -3, -1, 0, 2, 5]);
  });

  test('deve ordenar uma lista grande corretamente', () => {
    const lista = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    const resultado = bubbleSort([...lista]);
    const esperado = [...lista].sort((a, b) => a - b); 
    expect(resultado).toEqual(esperado);
  });

});