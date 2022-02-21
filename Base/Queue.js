class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
  }

  enqueue(x) {
    this.queue.push(x);
  }

  dequeue() {
    return this.isEmpty() ? undefined : this.queue[this.head++];
  }

  isEmpty() {
    return this.queue.length - this.head === 0;
  }
}
