// 22-02-12 (토) 14:43
// BAEKJOON
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const board = input.map(v => v.split(' ').map(Number));
const log = console.log;
const isValidBlock = (x, y, min, max) => min <= x && x <= max && min <= y && y <= max;

const solution = board => {
  const dx = [1, 1, 0, -1];
  const dy = [0, 1, 1, 1];
  const len = board.length;

  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      if (board[row][col] === 0) continue;
      let temp = board[row][col];
      for (let k = 0; k < dx.length; k++) {
        let [initX, initY] = [row, col];
        let [nx, ny] = [row + dx[k], col + dy[k]];
        let count = 1;

        while (true) {
          if (!isValidBlock(nx, ny, 0, len - 1)) break;
          if (board[nx][ny] !== temp) break;
          nx += dx[k];
          ny += dy[k];
          count++;

          if (count === 5) {
            if (isValidBlock(initX - dx[k], initY - dy[k], 0, len - 1) && board[initX - dx[k]][initY - dy[k]] === temp) break;
            if (isValidBlock(nx, ny, 0, len - 1) && board[nx][ny] === temp) break;
            log(temp);
            log(row + 1, col + 1);
            return;
          }
        }
      }
    }
  }
  log(0);
  return;
};
solution(board);
