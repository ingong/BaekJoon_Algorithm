class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0];

  insert = (key, value) => {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp();
  };


  heapifyUp = () => {
    let index = this.heap.length - 1; 
    const lastInsertedNode = this.heap[index];

 
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);


      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }


    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop(); 
      this.heapifyDown(); 
    }
    return rootNode;
  };


  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];


    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);


      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;


      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
};

// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, K] = input[0].split(' ').map(Number);
  const array = input.slice(1, 1 + N).map(v => v.split(' ').map(Number));
  const bags = input.slice(1 + N).map(Number);
  
  const [WEIGHT, VALUE] = [0, 1];
  array.sort((a, b) => a[WEIGHT] - b[WEIGHT]);
  bags.sort((a, b) => a - b);
  const priorityQueue = new PriorityQueue();

  let index = 0;
  let answer = 0;
  
  for (let i = 0; i < K; i++){
    const bagSize = bags[i];

    while (index < N) {
      const [size, price] = array[index];

      if (size <= bagSize) {
        priorityQueue.enqueue(-price);
        index++;
      } else break;
    }

    if (!priorityQueue.isEmpty()) {
      const {key} = priorityQueue.dequeue();
      answer += (-key);
    }
  }

  log(answer);
};

solution(input);