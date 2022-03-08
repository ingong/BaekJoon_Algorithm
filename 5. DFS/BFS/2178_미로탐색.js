const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(v => v.split('').map(Number));

const dist = Array.from({ length: N }, () => new Array(M).fill(-1));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const queue = [];

queue.push([0, 0, 1]);
dist[0][0] = 1;

while (queue.length > 0) {
  const [x, y, d] = queue.shift();
  for (let dir = 0; dir < 4; dir++) {
    const [nx, ny] = [x + dx[dir], y + dy[dir]];
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (dist[nx][ny] > 0 || board[nx][ny] === 0) continue;
    queue.push([nx, ny, d + 1]);
    dist[nx][ny] = d + 1;
  }
}

log(dist[N - 1][M - 1]);
