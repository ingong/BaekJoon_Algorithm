// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const board = input.slice(1).map(v => v.split(' ').map(Number));
  const house = [];
  const chicken = [];
  const target = [];
  let answer = Number.MAX_VALUE

  for (let row = 0; row < N; row++){
    for (let col = 0; col < N; col++){
      if (board[row][col] === 1) house.push([row, col]);
      else if (board[row][col] === 2) chicken.push([row, col]);
    }
  }
  
  function check() {
    log('target', target);
    log('M', M);
    let result = 0;
    for (let i = 0; i < house.length; i++){
      const [houseRow, houseCol] = house[i];
      let temp = Number.MAX_VALUE;
      for (let j = 0; j < M; j++){
        const chickenIndex = target[j];
        const [chickenRow, chickenCol] = chicken[chickenIndex];

        const dist = Math.abs(houseRow - chickenRow) + Math.abs(houseCol - chickenCol);
        temp = Math.min(temp, dist)
      }
      result += temp;
    }
    return result;
  }

  function DFS(idx, cnt) {
    if (cnt === M) {
      answer = Math.min(answer, check())
      return;
    }
    
    for (let i = idx; i < N; i++){
      target.push(i)
      DFS(i + 1, cnt + 1);
      target.pop(); 
    }
  }

  DFS(0, 0);
  log(answer);
};

solution(input);
// log(Math.abs(1 - 5));