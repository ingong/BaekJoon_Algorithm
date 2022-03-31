// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const arr = input[1].split(' ').map(v => Number(v));
  const set = [...new Set(arr)].sort((a, b) => a - b);
  
  log(arr.map(v => lowerBound(v)).join(' '));
  
  function lowerBound(target) {
    let [start, end] = [0, N];
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (set[mid] < target) start = mid + 1;
      else end = mid;
    }
    return start;
  }
};

solution(input);