// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const array = input.slice(1).map(Number);
  array.sort((a, b) => a - b);
  let start = 0, end = 0, diff = 0, answer = Infinity;
  
  while (true) {
    if (diff > M) start++;
    else if (end === N - 1 && diff < M) break;
    else if (diff < M) end++;
    
    diff = array[end] - array[start];
    if (diff > M) answer = Math.min(answer, diff);
    else if (diff === M) {
      answer = M;
      break;
    }
  }
  log(answer);
};

solution(input);