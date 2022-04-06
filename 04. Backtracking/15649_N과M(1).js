const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M] = input[0].split(' ').map(Number);

const visited = new Array(N).fill(false);
const output = [];
let result = '';

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);
// 양쪽 공백을 제거하기 위해 사용하는 함수
log(result.trim());
