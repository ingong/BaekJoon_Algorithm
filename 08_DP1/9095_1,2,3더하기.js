const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const T = +input[0];
const TestCase = input.slice(1).map(Number);

const dp = new Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < 11; i++){
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

TestCase.forEach(v => log(dp[v]));