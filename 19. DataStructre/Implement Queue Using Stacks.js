class Queue{
  constructor() {
    this.front = [];
    this.back = [];
  }
  push(value) {
    const len = this.front.length;
    for (let index = 0; index < len; index++){
      this.back.push(this.front.pop());
    }
    this.back.push(value);
  }
  pop() {
    const len = this.back.length;
    for (let index = 0; index < len; index++){
      this.front.push(this.back.pop());
    }
    return this.front.pop();
  }
  peek() {
    if (this.empty()) return null;
    if (this.back.length > 0) {
      return this.back[0];
    }
    return this.front[this.front.length - 1];
  }
  empty() {
    return this.front.length === 0 && this.back.length === 0;
  }
}

const log = console.log;
const myQueue = new Queue();
myQueue.push(1)
myQueue.push(2)
myQueue.push(3)
myQueue.pop();
myQueue.push(5);
myQueue.push(6);
myQueue.push(7);
log(myQueue.peek());