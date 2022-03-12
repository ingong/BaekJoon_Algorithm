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
  const N = +input[0];
  const array = input.slice(1).map(v => v.split(' ').map(Number));
  const priorityQueue = new PriorityQueue();
  
  array.sort((a, b) => {
    if (a[0] - b[0] > 0) return 1;
    else if (a[0] - b[0] === 0) return b[1] - a[1];
    else if (a[0] - b[0] < 0) return -1;
  })
  

  for (let i = 0; i < N; i++){
    priorityQueue.enqueue(array[i][1], array[i][0]);
    const deadline = array[i][0];
    if (priorityQueue.heap.length > deadline) {
      priorityQueue.dequeue();
    }
  }
  log(priorityQueue.heap.reduce((acc, cur) => acc + cur.key, 0));
};

solution(input);