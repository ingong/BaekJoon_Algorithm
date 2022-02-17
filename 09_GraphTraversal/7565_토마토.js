class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
  }

  enqueue(x, y) {
    this.queue.push([x, y]);
  }

  dequeue() {
    return this.isEmpty() ? undefined : this.queue[this.head++];
  }

  isEmpty() {
    return this.queue.length - this.head === 0;
  }
}
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const fs = require('fs');
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [M, N] = input[0].split(' ').map(Number);
const board = input.slice(1).map(v => v.split(' ').map(Number));
const dist = Array.from({ length: N }, () => new Array(M).fill(0));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const queue = new Queue();

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (board[row][col] === 1) queue.enqueue(row, col);
    else if (board[row][col] === 0) dist[row][col] = -1;
  }
}

while (!queue.isEmpty()) {
  const [x, y] = queue.dequeue();
  for (let dir = 0; dir < 4; dir++) {
    const [nx, ny] = [x + dx[dir], y + dy[dir]];
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (dist[nx][ny] >= 0) continue;
    dist[nx][ny] = dist[x][y] + 1;
    queue.enqueue(nx, ny);
  }
}

let answer = 0;
for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (dist[row][col] >= 0) answer = Math.max(answer, dist[row][col]);
    else {
      log(-1);
      return 0;
    }
  }
}
log(answer);
