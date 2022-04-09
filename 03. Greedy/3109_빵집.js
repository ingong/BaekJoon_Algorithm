// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [R, C] = input[0].split(' ').map(Number);
  const board = input.slice(1).map(v => v.split(''));
  const visited = Array.from({ length: R }, () => new Array(C).fill(false));
  const dx = [-1, 0, 1];
  const dy = [1, 1, 1];
  let count = 0;
  let answer = false;

  for (let row = 0; row < R; row++) {
    answer = false;
    DFS(row, 0); // error
  }
  
  function DFS(row, col) {
    visited[row][col] = true; // error 
    
    if (col === C - 1) {
      answer = true;
      count++;
      return;
    }

    for (let i = 0; i < 3; i++) {
      const [nx, ny] = [row + dx[i], col + dy[i]];
      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
      if (board[nx][ny] === 'x') continue;
      if (visited[nx][ny]) continue;
      DFS(nx, ny);
      if (answer) return;
    }
  }

  log(count);
  log(visited);
};

solution(input);