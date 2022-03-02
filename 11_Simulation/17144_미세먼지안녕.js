const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const getNewBoard = (R, C) => Array.from({ length: R }, () => new Array(C).fill(0));
  
const solution = (input) => {
  const [R, C, T] = input[0].split(' ').map(Number);
  const board = input.slice(1).map(v => v.split(' ').map(Number));
  let time = 0;

  const airRow = []
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 2; i < R; i++){
    if (board[i][0] === -1) {
      airRow.push(i);
      airRow.push(i + 1);
      break;
    }
  };

  const spread = () => {
    const newBoard = Array.from({ length: R }, () => new Array(C).fill(0));
    
    for (let x = 0; x < R; x++) {
      for (let y = 0; y < C; y++) {
        if (board[x][y] <= 0) continue;
        const dust = board[x][y];
        const insert = Math.floor(dust / 5);
        let count = 0;
        for (let dir = 0; dir < 4; dir++) {
          const [nx, ny] = [x + dx[dir], y + dy[dir]];
          if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
          if (board[nx][ny] === -1) continue;
          newBoard[nx][ny] += insert;
          count++;
        }
        board[x][y] = board[x][y] - insert * count;
      }
    }

    for (let row = 0; row < R; row++) {
      for (let col = 0; col < C; col++) {
          board[row][col] += newBoard[row][col];
      }
    }
  };

  const topWind = () => {
    const up_row = airRow[0];
    for (let i = up_row - 1; i >= 1; i--) board[i][0] = board[i - 1][0];
    for (let i = 0; i < C - 1; i++) board[0][i] = board[0][i + 1];
    for (let i = 0; i <= up_row - 1; i++) board[i][C - 1] = board[i + 1][C - 1];
    for (let i = C - 1; i >= 2; i--) board[up_row][i] = board[up_row][i - 1];
    board[up_row][1] = 0;
  }

  const bottomWind = () => {
    const bottom_row = airRow[1];
    for (let row = bottom_row + 1; row < R - 1; row++) board[row][0] = board[row + 1][0];
    for (let col = 0; col < C - 1; col++) board[R - 1][col] = board[R - 1][col + 1];
    for (let row = R - 1; row > bottom_row; row--) board[row][C - 1] = board[row - 1][C - 1];
    for (let col = C - 1; col > 1; col--) board[bottom_row][col] = board[bottom_row][col - 1];
    board[bottom_row][1] = 0;
  }

  while (true) {
    spread();
    topWind();
    bottomWind();
    time++;
    if (time === T) break;
  }  

  let answer = 0;
  for (let x = 0; x < R; x++){
    for (let y = 0; y < C; y++){
      if (board[x][y] <= 0) continue;
      answer += board[x][y];
    }
  }
  log(answer);
};

solution(input);