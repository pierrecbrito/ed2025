const bubbleSort = require('../src/Bubble.js');

describe('BubbleSort', () => {
  // Teste 1: Verifica se a função lida corretamente com uma lista vazia
  test('deve lidar com uma lista vazia', () => {
    const lista = [];
    const resultado = bubbleSort(lista);
    expect(resultado).toEqual([]);
  });

  // Teste 2: Verifica se ordena corretamente uma lista com elementos fora de ordem
  test('deve ordenar uma lista desordenada', () => {
    const lista = [5, 3, 8, 4, 2];
    const resultado = bubbleSort([...lista]); // Usa cópia para não modificar a original
    expect(resultado).toEqual([2, 3, 4, 5, 8]);
  });

  // Teste 3: Verifica se mantém uma lista já ordenada
  test('deve manter uma lista já ordenada', () => {
    const lista = [1, 2, 3, 4, 5];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });

  // Teste 4: Verifica se ordena uma lista em ordem decrescente
  test('deve ordenar uma lista em ordem decrescente', () => {
    const lista = [5, 4, 3, 2, 1];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });

  // Teste 5: Verifica se lida com elementos duplicados
  test('deve lidar com elementos duplicados', () => {
    const lista = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  // Teste 6: Verifica se lida com uma lista de um único elemento
  test('deve lidar com uma lista de um elemento', () => {
    const lista = [42];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([42]);
  });

  // Teste 8: Verifica se lida com números negativos
  test('deve ordenar uma lista com números negativos', () => {
    const lista = [-3, 5, -1, 0, -10, 2];
    const resultado = bubbleSort([...lista]);
    expect(resultado).toEqual([-10, -3, -1, 0, 2, 5]);
  });

  // Teste 9: Verifica se lida com uma lista grande (teste de desempenho básico)
  test('deve ordenar uma lista grande corretamente', () => {
    const lista = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
    const resultado = bubbleSort([...lista]);
    const esperado = [...lista].sort((a, b) => a - b); // Usa sort nativo para comparar
    expect(resultado).toEqual(esperado);
  });

});