// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, C] = input[0].split(' ').map(Number);
  const M = +input[1];
  const array = input.slice(2).map(v => v.split(' ').map(Number));
  const DEPARTURE = 1;
  const result = new Array(N + 1).fill(0);
  array.sort((a, b) => a[DEPARTURE] - b[DEPARTURE]);
  let answer = 0;
  for (let i = 0; i < array.length; i++){
    const [start, end, box] = array[i];
    const temp = result.slice(start, end);
    const maxValue = Math.max(...temp);
    const possibleBox = Math.min(C - maxValue, box);
    for (let j = start; j < end; j++){
      result[j] += possibleBox;
    }
    answer += possibleBox;
  }
  log(answer);
};

solution(input);