const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const board = input.slice(1).map(v => v.split(' ').map(Number));
  
  const searchR = (row, col) => {
    let count = 0;
    for (let i = col + 1; i < M; i++){
      if (board[row][i] === 0) count++;
      else if (board[row][i] === 6) return count;
    }
    return count;
  };
  
  const fillR = (row, col) => {
    for (let i = col + 1; i < M; i++){
      if (board[row][i] === 0) board[row][i] = '#';
      else if (board[row][i] === 6) return;
    }
  };
  
  const searchD = (row, col) => { 
    let count = 0;
    for (let i = row + 1; i < N; i++){
      if (board[i][col] === 0) count++;
      else if (board[i][col] === 6) return count;
    }
    return count;
  };

  const fillD = (row, col) => {
    for (let i = row + 1; i < N; i++){
      if (board[i][col] === 0) board[i][col] = '#';
      else if (board[i][col] === 6) return count;
    }
  };
  
  const searchL = (row, col) => {
    let count = 0;
    for (let i = col - 1; i > -1; i--){
      if (board[row][i] === 0) count++;
      else if (board[row][i] === 6) return count;
    }
    return count;
  };


  const fillL = (row, col) => {
    for (let i = col - 1; i > -1; i--){
      if (board[row][i] === 0) board[row][i] = '#';
      else if (board[row][i] === 6) return;
    }
  };
  
  const searchU = (row, col) => {
    let count = 0;
    for (let i = row - 1; i > -1; i--){
      if (board[i][col] === 0) count++;
      else if (board[i][col] === 6) return count;
    }
    return count;
  };

  const fillU = (row, col) => {
    for (let i = row - 1; i > -1; i--){
      if (board[i][col] === 0) board[i][col] = '#';
      else if (board[i][col] === 6) return;
    }
  };

  for (let row = 0; row < N; row++){
    for (let col = 0; col < M; col++){
      if (board[row][col] === 0 || board[row][col] === '#' || board[row][col] === 6) continue;

      switch (board[row][col]) {
        case 1:
          const [r, d, l, u] = [searchR(row, col), searchD(row, col), searchL(row, col), searchU(row, col)];
          const max1 = Math.max(r, d, l, u);
          if (max1 === r) fillR(row, col);
          else if (max1 === d) fillD(row, col);
          else if (max1 === l) fillL(row, col);
          else if (max1 === u) fillU(row, col);
          break;
        case 2:
          const [h, v] = [searchR(row, col) + searchL(row, col), searchD(row, col) + searchU(row, col)];
          const max2 = Math.max(h, v);
          if (max2 === h) {
            fillR(row, col)
            fillL(row, col)
          } else {
            fillU(row, col)
            fillD(row, col)
          }
          break;
        case 3:
          const [r3, d3, l3, u3] = [
            searchU(row, col) + searchR(row, col),
            searchR(row, col) + searchD(row, col),
            searchD(row, col) + searchL(row, col),
            searchL(row, col) + searchU(row, col)
          ];
          const max3 = Math.max(r3, d3, l3, u3);
          if (max3 === r3) {
            fillU(row, col);
            fillR(row, col);
          }
          else if (max3 === d3) {
            fillR(row, col);
            fillD(row, col);
          } 
          else if (max3 === l3) {
            fillD(row, col);
            fillL(row, col);
          }  
          else if (max3 === u3) {
            fillL(row, col);
            fillU(row, col);
          } 
          break;
        case 4:
          const [r4, d4, l4, u4] = [searchR(row, col), searchD(row, col), searchL(row, col), searchU(row, col)];
          const min = Math.min(r4, d4, l4, u4);
          if (min === r4) {
            fillD(row, col);
            fillL(row, col);
            fillU(row, col);
          } else if (min === d4) {
            fillR(row, col);
            fillL(row, col);
            fillU(row, col);
          } else if (min === l4) {
            fillR(row, col);
            fillD(row, col);
            fillU(row, col); 
          } else if (min === u4) {
            fillR(row, col);
            fillD(row, col);
            fillL(row, col);
          }
          break;
        case 5:
          fillR(row, col);
          fillD(row, col);
          fillL(row, col);
          fillU(row, col);
          break;
      }
    }
  }
  
  let answer = 0;
  for (let i = 0; i < N; i++){
    for (let j = 0; j < M; j++){
      if (board[i][j] === 0) answer++;
    }
  }
  log(answer);
};

solution(input);
