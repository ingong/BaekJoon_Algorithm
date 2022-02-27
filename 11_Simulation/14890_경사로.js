const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const isLoad = (load, L) => {
  let count = 1;
  for (let i = 0; i < load.length - 1; i++){
    if (load[i] === load[i + 1]) count++;
    else if (load[i] + 1 === load[i + 1] && count >= L) count = 1;
    else if (load[i] - 1 === load[i + 1] && count >= 0) count = 1 - L;
    else return false;
  }
  return count >= 0 ? true : false;
} 

const solution = (input) => {
  const [N, L] = input[0].split(' ').map(Number);
  const board = input.slice(1).map(v => v.split(' ').map(Number));
  let answer = 0;
  
  for (let row = 0; row < N; row++){
    if (isLoad(board[row], L)) answer++;
    if (isLoad(board[row].map((_, i) => board[i][row]), L)) answer++; 
  }
  log(answer);
}

solution(input);