// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, K] = input[0].split(' ').map(Number);
  const list = [[0, 0], ...input.slice(1).map(v => v.split(' ').map(Number))];
  const dp = Array.from({ length: N + 1}, () => new Array(K + 1).fill(0));

  for (let i = 1; i < N + 1; i++){
    const w = list[i][0];
    const v = list[i][1];
    for (let j = 1; j < K + 1; j++){
      if (j < w) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
    }
  }

  log(dp[N][K]);  
};

solution(input);