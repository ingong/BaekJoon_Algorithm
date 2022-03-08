const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const N = +input[0];
const list = input[1].split('');
const numbers = input.slice(2).map(Number);
const operator = ['*', '+', '/', '-'];
const dict = {};
const stack = [];
let ASCII = 65;

const getFloatFixed = (value, fixed) => parseFloat(Math.round(value * 100) / 100).toFixed(fixed);
const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

for (let i = 0; i < N; i++){
  const alphabet = String.fromCharCode(ASCII++);
  dict[alphabet] = numbers[i];
}

for (let i = 0; i < list.length; i++){
  if (operator.includes(list[i])) {
    const b = stack.pop();
    const a = stack.pop();
    const fn = calculator[list[i]];
    const result = fn(a, b);
    stack.push(result);
  } else {
    stack.push(dict[list[i]]);
  }
}

console.log(getFloatFixed(stack[0], 2));
