class Stack{
  constructor() {
    this.front = [];
    this.back = [];
  }
  push(value) {
    this.front.push(value);
  }
  pop() {
    while (this.front.length > 1) {
      this.back.push(this.front.shift());
    }
    const element = this.front.shift();
    this.front = this.back;
    this.back = [];
    return element;
  }
  top() {
    while (this.front.length > 1) {
      this.back.push(this.front.shift());
    }
    const element = this.front.shift();
    this.back.push(element);
    this.front = this.back;
    this.back = [];
    return element;
  }
  empty() {
    return this.front.length === 0;
  }
}