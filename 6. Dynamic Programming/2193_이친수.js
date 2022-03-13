// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const MAX = 90;
  const dp = new Array(MAX + 1).fill(BigInt(0));
  dp[1] = BigInt(1);
  dp[2] = BigInt(1);
  
  for (let i = 3; i <= MAX; i++){
    for (let j = 1; j <= i - 2; j++){
      dp[i] += BigInt(dp[j]);
    }
    dp[i] += BigInt(1);
  }
  log(dp[N].toString());
};

solution(input);