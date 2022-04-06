const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const N = +input[0];
const timeTable = input.slice(1).map(v => v.split(' ').map(Number));
timeTable.sort((a, b) => {
  if (b[1] - a[1] > 0) return 1;
  else if (b[1] - a[1] === 0) return b[0] - a[0];
  else return -1;
});
let answer = 0;
let endTime = 0;

const start = timeTable.pop();
answer++;
endTime = start[1];
while (timeTable.length > 0) {
  const temp = timeTable.pop();
  if (endTime <= temp[0]) {
    log(temp);
    endTime = temp[1];
    answer++;
  }
}
log(answer);

