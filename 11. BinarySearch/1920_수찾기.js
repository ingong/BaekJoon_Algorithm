// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const arr1 = input[1].split(' ').map(Number);
  const M = +input[2];
  const arr2 = input[3].split(' ').map(Number);
  const answer = [];
  arr1.sort((a, b) => a - b);
  for (const v of arr2) {
    binarySearch(v, arr1);
  }
  
  log(answer.join('\n'));
  
  function binarySearch(target, array) {
    let [start, end] = [0, array.length - 1];
    while (true) {
      const mid = Math.floor((start + end) / 2);
      if (array[mid] < target) start = mid + 1;
      else if (array[mid] > target) end = mid - 1;
      else {
        answer.push(1);
        break;
      }

      if (start > end) {
        answer.push(0);
        break;
      }
    }
    
  }
  

};

solution(input);