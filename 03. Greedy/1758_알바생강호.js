const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/1.txt').toString().trim().split('\n').map(Number);
// 팁을 주려는 금액이 큰 사람을 앞으로, 작은 사람을 뒤로
const [N, M] = [input[0], input.slice(1)];
const log = console.log;

const solution = waitList => {
  let answer = 0;

  waitList
    .sort((a, b) => b - a)
    .forEach((tip, index) => {
      if (tip - index > 0) answer += tip - index;
    });

  log(answer);
};

solution(M);
