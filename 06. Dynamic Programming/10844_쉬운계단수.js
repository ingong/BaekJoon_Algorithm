// BAEKJOON
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
// const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const DP = Array.from({ length: N }, () => Array(10).fill(0));
  // 1의 자리
  for (let i = 1; i < 10; i++){
    DP[0][i] = 1;
  }
  // 10의 자리 이상
  for (let row = 1; row < N; row++){
    for (let col = 0; col < 10; col++){
      if (col === 0) DP[row][col] = DP[row - 1][1] % 1000000000;
      else if (col === 9) DP[row][col] = DP[row - 1][8] % 1000000000;
      else DP[row][col] = (DP[row - 1][col - 1] + DP[row - 1][col + 1]) % 1000000000;
    }
  }
  log(DP[N - 1].reduce((acc, cur) => acc + cur, 0) % 1000000000);
};

solution(input);