const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const solution = (input) => {
  const numbers = input[0].split('').map(Number);
  const sum = numbers.reduce((a, b) => a + b, 0);
  if (!numbers.includes(0) || (sum % 3 !== 0)) {
    log(-1);
    return;
  } else {
    log(numbers.sort((a, b) => b - a).join(''));
  }
};

solution(input);