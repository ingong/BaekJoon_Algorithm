const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const array = input[1].split(' ').map(Number);
  const dp = new Array(N).fill(1);

  for (let i = 1; i < N; i++){
    const cur = array[i];
    let max = 0;
    for (let j = 0; j < i; j++){
      if (cur > array[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }
  
  log(Math.max(...dp));
};

solution(input);