// 22-02-12 (토) 14:43
// BAEKJOON
const fs = require('fs');
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const board = input.map(v => v.split(' ').map(Number));
const log = console.log;

const solution = board => {
  const dx = [1, 1, 0, -1];
  const dy = [0, 1, 1, 1];
  const len = board.length;

  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      if (board[row][col] === 0) continue;
      let temp = board[row][col];
      for (let k = 0; k < dx.length; k++) {
        let x = row;
        let y = col;
        let nx = row + dx[k];
        let ny = col + dy[k];
        let count = 1;

        while (true) {
          if (nx < 0 || nx >= len || ny < 0 || ny >= len) break;
          if (board[nx][ny] !== temp) break;
          nx += dx[k];
          ny += dy[k];
          count++;

          if (count === 5) {
            if (x - dx[k] >= 0 && x - dx[k] < len && y - dy[k] >= 0 && y - dy[k] < len) {
              if (board[x - dx[k]][y - dy[k]] === temp) break;
            }
            if (nx >= 0 && nx < len && ny >= 0 && ny < len) {
              if (board[nx][ny] === temp) break;
            }
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
