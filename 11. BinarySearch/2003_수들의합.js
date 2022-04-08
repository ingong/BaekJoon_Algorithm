// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const array = input[1].split(' ').map(Number);

  let result = 0, sum = 0, start = 0, end = 0;
  while (true) {
    if (sum >= M) sum -= array[start++];
    else if (end === N) break;
    else sum += array[end++];

    if (sum === M) result++;
  }

  log(result);
};

solution(input);