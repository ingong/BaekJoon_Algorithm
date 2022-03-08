const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, graph] = [+input[0], input.slice(1).map(v => v.split(' ').map(Number))];
let answer = -Infinity;

const recursive = (day, pay) => {
  if (day === N) {
    answer = Math.max(answer, pay);
    return;
  } else if (day > N) return;

  recursive(day + 1, pay);
  recursive(day + graph[day][0], pay + graph[day][1]);
};

recursive(0, 0);
log(answer);
