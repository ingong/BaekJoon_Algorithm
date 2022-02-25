const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(v => v.split(' ').map(Number));
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
let answer = 0;

// ㅜ
const exceptionCase = [
  [[0, 0],[0, 1], [0, 2], [-1, 1]],
  [[0, 0],[1, 0], [2, 0], [1, 1]],
  [[0, 0],[0, 1], [0, 2], [1, 1]],
  [[0, 0],[1, 0], [1, -1], [2, 0]],
]; 

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const solveExcept = (row, col) => {
  for (let i = 0; i < 4; i++){
    let flag = true;
    let tempSum = 0;
    for (let j = 0; j < 4; j++){
      const nx = row + exceptionCase[i][j][0];
      const ny = col + exceptionCase[i][j][1];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
        flag = false;
        continue;
      }
      tempSum += board[nx][ny];
    }
    if (flag && tempSum > answer) answer = tempSum;
  }
}

const DFS = (row, col, sum, cnt) => {
  if (cnt === 4) {
    if (sum > answer) answer = sum;
    return;
  }

  for (let dir = 0; dir < dx.length; dir++){
    const nx = row + dx[dir];
    const ny = col + dy[dir];
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (visited[nx][ny]) continue;
    visited[nx][ny] = true;
    DFS(nx, ny, sum + board[nx][ny], cnt + 1);
    visited[nx][ny] = false;
  }
}

for (let row = 0; row < N; row++){
  for (let col = 0; col < M; col++){
    visited[row][col] = true;
    DFS(row, col, board[row][col], 1);
    visited[row][col] = false;
    solveExcept(row, col);
  }
}

log(answer);