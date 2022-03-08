const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(v => v.split(''));
const dist1 = Array.from({ length: N }, () => Array(M).fill(-1));
const dist2 = Array.from({ length: N }, () => Array(M).fill(-1));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const queue1 = [];
const queue2 = [];
let answer = 'IMPOSSIBLE';

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 'F') {
      queue1.push([i, j]);
      dist1[i][j] = 0;
    } else if (board[i][j] === 'J') {
      queue2.push([i, j]);
      dist2[i][j] = 0;
    }
  }
}

while (queue1.length) {
  const [x, y] = queue1.shift();
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (board[nx][ny] === '#' || dist1[nx][ny] >= 0) continue;
    dist1[nx][ny] = dist1[x][y] + 1;
    queue1.push([nx, ny]);
  }
}

const BFS = () => {
  while (queue2.length) {
    const [x, y] = queue2.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
        answer = dist2[x][y] + 1;
        return 0;
      }
      if (dist2[nx][ny] >= 0 || board[nx][ny] === '#') continue;
      if (dist1[nx][ny] !== -1 && dist1[nx][ny] <= dist2[x][y] + 1) continue;
      dist2[nx][ny] = dist2[x][y] + 1;
      queue2.push([nx, ny]);
    }
  }
};

BFS();
log(answer);
