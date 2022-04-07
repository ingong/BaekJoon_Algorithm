// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const array = input[1].split(' ').map(Number);
  const selected = new Array(N + 1).fill(false);
  const debtList = new Array(N + 1).fill(0);
  const answer = [];
  
  for (let i = 0; i < N; i++){
    const num = array[i];
    if (selected[num]) {
      selected[num] = true;
      answer.push(debtList[num]);
    } else {
      if ((num - 1 > 0) && !selected[num - 1]) {
        debtList[num - 1] = num;
        selected[num - 1] = true;
        selected[num] = true;
        answer.push(num - 1);
      } else {
        selected[num] = true;
        answer.push(num);
      }
    }
  }  

  log(answer.join(' '));
};

solution(input);


// 내가 사용된 적이 있다면
// 그에 대한 보상으로 내가 그 숫자를 사용해야함

// 내가 사용된 적이 없다면
// num - 1 을 선택할 수 있음 (이 때 조건은 num - 1이 0 보다 크고, num - 1이 선택된적이 없어야함함
// debt[num - 1] = num;
// selected[num - 1] = true;

// num - 1을 선택할 수 없으면
// debt[num] = num;
// selected[num] = true