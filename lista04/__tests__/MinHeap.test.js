const MinHeap = require('../src/MinHeap.js');

describe('MinHeap', () => {
  test('deve criar um heap vazio', () => {
    const heap = new MinHeap();
    expect(heap.size()).toBe(0);
    expect(heap.isEmpty()).toBe(true);
  });

  test('deve inserir elementos corretamente', () => {
    const heap = new MinHeap();
    heap.insert(5);
    heap.insert(3);
    heap.insert(8);
    heap.insert(1);
    
    expect(heap.size()).toBe(4);
    expect(heap.peek()).toBe(1);
  });

  test('deve extrair o elemento mínimo corretamente', () => {
    const heap = new MinHeap();
    heap.insert(5);
    heap.insert(3);
    heap.insert(8);
    heap.insert(1);
    heap.insert(10);
    heap.insert(2);
    
    expect(heap.extractMin()).toBe(1);
    expect(heap.extractMin()).toBe(2);
    expect(heap.extractMin()).toBe(3);
    expect(heap.extractMin()).toBe(5);
    expect(heap.extractMin()).toBe(8);
    expect(heap.extractMin()).toBe(10);
    expect(heap.extractMin()).toBe(null);
  });

  test('deve manter a propriedade do heap após operações', () => {
    const heap = new MinHeap();
    heap.insert(20);
    heap.insert(15);
    heap.insert(10);
    heap.insert(5);
    
    expect(heap.peek()).toBe(5);
    heap.extractMin();
    expect(heap.peek()).toBe(10);
    
    heap.insert(7);
    expect(heap.peek()).toBe(7);
  });

  test('deve lidar com casos de borda', () => {
    const heap = new MinHeap();
    expect(heap.peek()).toBe(null);
    expect(heap.extractMin()).toBe(null);
    
    heap.insert(5);
    expect(heap.size()).toBe(1);
    expect(heap.extractMin()).toBe(5);
    expect(heap.isEmpty()).toBe(true);
  });
});