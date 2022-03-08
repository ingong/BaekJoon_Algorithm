const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (str) => {
  const stack = [];
  const brackets = [];
  const result = new Set();
  const selected = new Array(str.length).fill(true);
  
  for (let i = 0; i < str.length; i++){
    if (str[i] === '(') stack.push(i);
    else if (str[i] === ')') brackets.push([stack.pop(), i]);
  }

  const dfs = (idx, cnt) => {
    if (idx === brackets.length) {
      if (cnt > 0) {
        let temp = '';
        for (let i = 0; i < str.length; i++){
          if (selected[i]) temp += str[i];
        }
        result.add(temp);
      }
      return;
    }
    selected[brackets[idx][0]] = false;
    selected[brackets[idx][1]] = false;
    dfs(idx + 1, cnt + 1);
    selected[brackets[idx][0]] = true;
    selected[brackets[idx][1]] = true;
    dfs(idx + 1, cnt);
  }

  dfs(0, 0);
  log([...result].sort().reduce((a, b) => a + b + '\n', '').trim());
}

solution(input[0]);
