// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [K, N] = input[0].split(' ').map(Number);
  const lengthList = input.slice(1).map(Number).sort((a, b) => a - b);

  let min = 1;
  let max = Math.max(...lengthList);

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const pieces = lengthList.map(line => parseInt(line / mid)).reduce((a, b) => a + b, 0);
    if (pieces >= N) min = mid + 1;
    else max = mid - 1;
    log('max, min', max, min);
  }
};

solution(input);