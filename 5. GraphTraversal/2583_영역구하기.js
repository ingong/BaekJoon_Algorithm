// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const { count } = require('console');

// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [M, N, K] = input[0].split(' ').map(Number); // M 은 row, N 은 K
  const array = input.slice(1).map(v => v.split(' ').map(Number));
  const board = Array.from({ length: M }, () => new Array(N).fill(0));
  const result = [];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let answer = 0;

  for (let i = 0; i < array.length; i++){
    const [col1, row1, col2, row2] = array[i];
    for (let r = row1; r < row2; r++){
      for (let c = col1; c < col2; c++){
        board[r][c] = 1;
      }
    }
  }

  const BFS = (row, col) => {
    let count = 1; // error
    let queueIndex = 0;
    const queue = [];
    queue.push([row, col]);
    board[row][col] = 1; // error
    while (queueIndex < queue.length) {
      const [x, y] = queue[queueIndex];
      for (let d = 0; d < 4; d++){
        const [nx, ny] = [x + dx[d], y + dy[d]];
        if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
        if (board[nx][ny]) continue;
        queue.push([nx, ny]);
        board[nx][ny] = 1;
        count++;
      }
      queueIndex++; // error
    }
    result.push(count);
  }

  for (let row = 0; row < M; row++){
    for (let col = 0; col < N; col++){
      if (board[row][col] === 1) continue;
      BFS(row, col);
      answer++;
    }
  }
  

  log(answer);
  log(result.sort((a, b) => a - b).join(' '));
};

solution(input);