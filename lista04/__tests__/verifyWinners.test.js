const MaxHeap  = require('../src/MaxHeap.js');
const verificarVencedoresMegaSena = require('../src/verifyWinners.js');

describe('MaxHeap', () => {
  test('deve criar um heap vazio', () => {
    const heap = new MaxHeap();
    expect(heap.heap).toEqual([]);
  });

  test('deve inserir elementos corretamente', () => {
    const heap = new MaxHeap();
    heap.insert(10);
    heap.insert(20);
    heap.insert(15);
    expect(heap.heap[0]).toBe(20); 
  });

  test('deve construir um heap a partir de um array', () => {
    const heap = new MaxHeap();
    heap.buildHeap([10, 20, 15, 30, 5]);
    expect(heap.heap[0]).toBe(30); 
  });

  test('deve ordenar corretamente', () => {
    const heap = new MaxHeap();
    heap.buildHeap([10, 20, 15, 30, 5]);
    const sorted = heap.sort();
    expect(sorted).toEqual([5, 10, 15, 20, 30]);
  });
});

describe('verificarVencedoresMegaSena', () => {
  test('deve identificar vencedores da sena', () => {
    const numerosSorteados = [10, 20, 30, 40, 50, 60];
    const apostas = [
      [10, 20, 30, 40, 50, 60], 
      [10, 20, 30, 40, 50, 55], 
      [10, 20, 30, 40, 45, 55], 
      [5, 15, 25, 35, 45, 55]   
    ];
    
    const resultado = verificarVencedoresMegaSena(numerosSorteados, apostas);
    expect(resultado.sena).toEqual([1]);
    expect(resultado.quina).toEqual([2]);
  });

  test('deve identificar múltiplos vencedores', () => {
    const numerosSorteados = [1, 2, 3, 4, 5, 6];
    const apostas = [
      [1, 2, 3, 4, 5, 6], 
      [1, 2, 3, 4, 5, 7],  
      [1, 2, 3, 4, 5, 6],  
      [1, 2, 3, 4, 5, 8],  
      [1, 2, 3, 4, 7, 8]   
    ];
    
    const resultado = verificarVencedoresMegaSena(numerosSorteados, apostas);
    expect(resultado.sena).toEqual([1, 3]);
    expect(resultado.quina).toEqual([2, 4]);
  });

  test('deve verificar apostas com mais de 6 números', () => {
    const numerosSorteados = [5, 10, 15, 20, 25, 30];
    const apostas = [
      [5, 10, 15, 20, 25, 30, 35, 40], 
      [1, 5, 10, 15, 20, 25, 35],      
      [1, 2, 3, 4, 5, 6, 7]            
    ];
    
    const resultado = verificarVencedoresMegaSena(numerosSorteados, apostas);
    expect(resultado.sena).toEqual([1]);
    expect(resultado.quina).toEqual([2]);
  });

  test('deve validar o número de números sorteados', () => {
    const numerosSorteados = [1, 2, 3, 4, 5]; 
    const apostas = [[1, 2, 3, 4, 5, 6]];
    
    expect(() => {
      verificarVencedoresMegaSena(numerosSorteados, apostas);
    }).toThrow("Devem ser fornecidos exatamente 6 números sorteados");
  });

  test('deve lidar com apostas inválidas', () => {
    const numerosSorteados = [1, 2, 3, 4, 5, 6];
    const apostas = [
      [1, 2, 3, 4, 5],  
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] 
    ];
    
    const consoleSpy = jest.spyOn(console, 'log');
    
    const resultado = verificarVencedoresMegaSena(numerosSorteados, apostas);
    expect(resultado.sena).toEqual([]);
    expect(resultado.quina).toEqual([]);
    
    expect(consoleSpy).toHaveBeenCalledWith("Aposta 1 inválida: deve ter entre 6 e 15 números");
    expect(consoleSpy).toHaveBeenCalledWith("Aposta 2 inválida: deve ter entre 6 e 15 números");
    
    consoleSpy.mockRestore();
  });
});