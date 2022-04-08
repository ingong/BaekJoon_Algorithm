class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    if (parentIndex * 2 + 1 > this.heap.length - 1) return;
    return parentIndex * 2 + 1;
  }
  getRightChildIndex(parentIndex) {
    if (parentIndex * 2 + 2 > this.heap.length - 1) return;
    return parentIndex * 2 + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const lastInsertedValue = this.heap[index];
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > lastInsertedValue) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedValue;
  }

  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const root = this.peek();

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex] < root) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }
    this.heap[index] = root;
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    const count = this.heap.length;
    const root = this.peek();
    if (count <= 0) return 0;
    if (count === 1) {
      this.heap = [];
    } else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }
    return root;
  }
  replaceTop(value) {
    this.heap[0] = value;
    this.heapifyDown();
  }

  size() {
    return this.heap.length;
  }
}

// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const array = input.slice(1).map(v => v.split(' ').map(Number));
  const priorityQueue = new MinHeap();
  for (let i = 0; i < N; i++){
    for (let j = 0; j < N; j++){
      if (!priorityQueue.size() || priorityQueue.peek() < array[i][j]) {
        if (priorityQueue.size() < N) priorityQueue.insert(array[i][j])
        else priorityQueue.replaceTop(array[i][j])
      }
    }
  }
  
  log(priorityQueue.peek());
};

solution(input);