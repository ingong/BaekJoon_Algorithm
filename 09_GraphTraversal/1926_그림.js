const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(v => v.split(' ').map(Number));
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let paintMax = 0;
let paintCount = 0;

const BFS = (x, y) => {
  const queue = [];
  let area = 1;

  queue.push([x, y]);
  visited[x][y] = true;
  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      const [nx, ny] = [cx + dx[dir], cy + dy[dir]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (board[nx][ny] === 0 || visited[nx][ny]) continue;
      queue.push([nx, ny]);
      visited[nx][ny] = true;
      area++;
    }
  }
  return area;
};

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (visited[row][col] || board[row][col] === 0) continue;
    const result = BFS(row, col);
    paintMax = Math.max(result, paintMax);
    paintCount++;
  }
}

log(paintCount);
log(paintMax);
