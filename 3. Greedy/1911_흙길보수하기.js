// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, L] = input[0].split(' ').map(Number);
  const array = input.slice(1).map(v => v.split(' ').map(Number));
  const [START, END] = [0, 1];
  array.sort((a, b) => a[START] - b[START]);

  let position = 0, answer = 0;
  for (const [start, end] of array) {
    if (end <= position) continue;
    const maxStartPoint = Math.max(position, start);
    const count = Math.ceil((end - maxStartPoint) / L);
    answer += count;
    position = maxStartPoint + (count * L);
  }
  log(answer);

  for (let i = 0; i < N; i++){
    const [start, end] = [array[i][START], array[i][END] - 1];
    while (position <= end) {
      if (position < start) position++;
      else {
        position += L;
        answer++;
      }
    }
  }
  log(answer);
};

solution(input);
