const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(v => Number(v));
  const dp = Array.from({ length: N + 1}, () => new Array(N + 1).fill(0));
  for (let n = 1; n < N + 1; n++){
    for (let m = 0; m < n + 1; m++){
      if (m === 0 || m === n) dp[n][m] = 1;
      else dp[n][m] = BigInt(dp[n - 1][m]) + BigInt(dp[n - 1][m - 1]);
    }
  }
  log(dp[N][M].toString());
};

solution(input);

let dp = [0, 1];

for (let i = 2; i <= n; i++) {
    dp[i] = BigInt(dp[i-1]) * BigInt(i);
}

if (n === r) {
    console.log(1);
} else {
    console.log((dp[n] / (dp[r] * dp[n-r])).toString());
}