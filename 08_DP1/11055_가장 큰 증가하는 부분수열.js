const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const array = input[1].split(' ').map(Number);
  const dp = input[1].split(' ').map(Number);
  
  for (let i = 1; i < array.length; i++){
    for (let j = 0; j < i; j++){
      if (array[j] < array[i] && dp[j] + array[i] > dp[i]) {
        dp[i] = dp[j] + array[i];
      }
    }
  }
  log(Math.max(...dp));
};

solution(input);