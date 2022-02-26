const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const K = +input[1];
  const apples = input.slice(2, 2 + K).map(v => v.split(' ').map(v => Number(v)));
  const L = +input[2 + K];
  const direction = input.slice(3 + K).map((v) => v.split(' ')).map(([t, d]) => [+t, d])
  const board = Array.from({ length: N }, () => new Array(N).fill(0));
  apples.forEach(([row, col]) => board[row - 1][col - 1] = 1);
  const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  
  const isInvalidMove = (row, col) => row < 0 || row >= N || col < 0 || col >= N;
  
  let time = 1;
  let headIndex = 0;
  let dIndex = 0;

  const snake = [[0, 0]];
  board[0][0] = 2;

  while (true) {
    const [nx, ny] = [snake[headIndex][0] + dir[dIndex][0], snake[headIndex][1] + dir[dIndex][1]];
  
    if (isInvalidMove(nx, ny)) break;
    if (board[nx][ny] === 2) break;
    
    if (board[nx][ny] === 0) {
      const [tx, ty] = snake.shift();
      board[tx][ty] = 0;
      snake.push([nx, ny]);
      board[nx][ny] = 2;
    } else if (board[nx][ny] === 1) {
      snake.push([nx, ny]);
      board[nx][ny] = 2;
      headIndex += 1;
    }

    if (direction.length && direction[0][0] === time) {
      const [_, d] = direction.shift();
      if (d === 'D') dIndex = (dIndex + 1) % 4;
      else if (d === 'L') dIndex = (dIndex + 3) % 4;
    }
    
    time += 1;
  }

  log(time);
};

solution(input);

