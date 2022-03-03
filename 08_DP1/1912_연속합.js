const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const array = input[1].split(' ').map(Number);
  const dp = new Array(array.length).fill(0);
  
  dp[0] = array[0];
  for (let i = 1; i < array.length; i++){
    dp[i] = array[i];
    if (dp[i - 1] > 0) dp[i] = dp[i] + dp[i - 1];
  }
  log(dp);
};

solution(input);