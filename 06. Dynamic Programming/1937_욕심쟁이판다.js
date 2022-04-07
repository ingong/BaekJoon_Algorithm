// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const board = input.slice(1).map(v => v.split(' ').map(Number));
  const dp = Array.from({ length: N }, () => new Array(N).fill(0));
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let answer = -Infinity;
  for (let i = 0; i < N; i++){
    for (let j = 0; j < N; j++){
      answer = Math.max(answer, move(i, j));
    }
  }

  log(answer);

  function move(x, y) {
    if (dp[x][y] !== 0) return dp[x][y];
    dp[x][y] = 1;
    for (let dir = 0; dir < 4; dir++){
      const [nx, ny] = [x + dx[dir], y + dy[dir]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (board[nx][ny] <= board[x][y]) continue;
      dp[x][y] = Math.max(dp[x][y], move(nx, ny) + 1);
    }

    return dp[x][y];
  }
  
};

solution(input);