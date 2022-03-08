const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const N = +input[0];

function solution(input) {
  const answer = [];
  let count = 0;
  const hanoi = (n, from, other, to) => {
    if (n === 0) return;
    
    hanoi(n - 1, from, to, other)
    answer.push([from, to]);
    count += 1;
    hanoi(n - 1, other, from, to);
  }

  hanoi(input, 1, 2, 3);
  log(count);
  return answer.map(v => v.join(' ')).join('\n');
}

log(solution(N));