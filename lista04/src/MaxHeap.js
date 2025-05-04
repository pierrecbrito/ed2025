class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    heapifyUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[parentIndex] < this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        this.heapifyUp(parentIndex);
      }
    }
  
    buildHeap(array) {
      this.heap = [...array];
      for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
  
    heapifyDown(index) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let largestIndex = index;
  
      if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[largestIndex]) {
        largestIndex = leftIndex;
      }
  
      if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[largestIndex]) {
        largestIndex = rightIndex;
      }
  
      if (largestIndex !== index) {
        [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
        this.heapifyDown(largestIndex);
      }
    }
  
    sort() {
      const result = [];
      const originalHeap = [...this.heap];
      
      while (this.heap.length > 0) {
        result.unshift(this.extractMax());
      }
      
      this.heap = originalHeap;
      return result;
    }
  
    extractMax() {
      if (this.heap.length === 0) return null;
      
      const max = this.heap[0];
      const last = this.heap.pop();
      
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.heapifyDown(0);
      }
      
      return max;
    }
  }
  

  
module.exports = MaxHeap;