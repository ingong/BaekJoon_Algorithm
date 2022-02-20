const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, S] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);
const list = [];
let answer = 0;

const backtracking = (n) => { 
  if (n === M) {
    const sum = list.reduce((a, b) => a + b, 0);
    if (list.length > 0 && sum === S) answer++;
    return;
  }

  list.push(array[n]);
  backtracking(n + 1);
  list.pop();
  backtracking(n + 1);
};

backtracking(0);
log(answer);