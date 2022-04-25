class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  peek() {
    return this.head;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const holdingPointer = this.head;
      this.head = newNode;
      newNode.next = holdingPointer;
    }
    
    this.length++;
    return this;
  }
  pop() {
    if (this.isEmpty()) throw 'CAANOT POP FROM EMPTY';
    if (this.head === this.tail) this.bottom = null;
      
    const holdingPointer = this.head;
    this.head = holdingPointer.next;
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push('instagram');
myStack.push('apple');
myStack.push('tiktok');
console.log(myStack);
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());