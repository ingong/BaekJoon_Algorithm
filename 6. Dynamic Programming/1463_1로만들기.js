const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const N = +input[0];
const dp = Array(N + 1).fill(Infinity);
dp[0] = 0;
dp[1] = 0;

for (let i = 2; i < N + 1; i++){
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  if (i % 2 === 0) dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
}
log(dp[N]);