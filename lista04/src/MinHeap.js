class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    heapifyUp(index) {
      const parentIndex = this.getParentIndex(index);
      
      if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        this.heapifyUp(parentIndex);
      }
    }
  
    heapifyDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallestIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex !== index) {
        this.swap(index, smallestIndex);
        this.heapifyDown(smallestIndex);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const min = this.heap[0];
      const last = this.heap.pop();
      
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.heapifyDown(0);
      }
      
      return min;
    }
  
    peek() {
      if (this.heap.length === 0) {
        return null;
      }
      return this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  
  module.exports = MinHeap;