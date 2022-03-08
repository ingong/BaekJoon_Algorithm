const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M] = input[0].split(' ').map(Number);
const array = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const output = [];
const result = [];
const chosen = new Array(N).fill(false);

function dfs(cnt) {
  if (cnt === M) {
    output.push(result.join(' '));
  } else {
    chosen.forEach((bool, index) => {
      if (!bool) {
        chosen[index] = true;
        result.push(array[index]);
        dfs(cnt + 1);
        chosen[index] = false;
        result.pop();
      }
    });
  }
}

dfs(0);
log([...new Set(output)].join('\n'));
// REFERENCE
// https://tesseractjh.tistory.com/133
