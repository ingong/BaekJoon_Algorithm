// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const board = input.slice(1).map(v => v.split(' ').map(Number));
  const answer = new Array(3).fill(0);
  
  const DFS = (x, y, size) => {
    if (size === 1) {
      answer[board[x][y] + 1]++;
      return;
    }

    let zero = true, minus = true, plus= true;
    for (let i = x; i < x + size; i++){
      for (let j = y; j < y + size; j++){
        if (board[i][j] === -1) {
          zero = false;
          plus = false;
        } else if (board[i][j] === 0) {
          minus = false;
          plus = false;
        } else if (board[i][j] === 1) {
          minus = false;
          zero = false;
        }
      }
    }

    if (minus) {
      answer[0]++;
      return;
    }
    if (zero) {
      answer[1]++;
      return;
    }
    if (plus) {
      answer[2]++;
      return;
    }

    const nextSize = Math.floor(size / 3);
    DFS(x, y, nextSize);
    DFS(x, y + nextSize, nextSize);
    DFS(x, y + nextSize * 2, nextSize);
    
    DFS(x + nextSize, y, nextSize);
    DFS(x + nextSize, y + nextSize, nextSize);
    DFS(x + nextSize, y + nextSize * 2, nextSize);
    
    DFS(x + nextSize * 2, y, nextSize);
    DFS(x + nextSize * 2, y + nextSize, nextSize);
    DFS(x + nextSize * 2, y + nextSize * 2, nextSize);
  }
  DFS(0, 0, N);
  for (let i = 0; i < answer.length; i++){
    log(answer[i]);
  }
};

solution(input);