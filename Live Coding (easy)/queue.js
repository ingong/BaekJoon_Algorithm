const log = console.log;

class ownQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    this.stack1.push(element);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) throw 'CANNOT POP FROM EMPTY STACK';
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    } else return this.stack2.pop();
  }
}


const queue = new ownQueue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3);
log(queue.dequeue());