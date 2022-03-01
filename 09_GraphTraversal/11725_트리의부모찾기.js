const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const array = input.slice(1).map(v => v.split(' ').map(Number));
  const parents = new Array(N + 1).fill(0);
  const list = Array.from({ length: N + 1 }, () => []);

  array.forEach(([v1, v2]) => {
    list[v1].push(v2);
    list[v2].push(v1);
  })
  
  const queue = [];
  queue.push(1);
  parents[1] = 1;
  let idx = 0;
  
  while (idx < N) {
    const x = queue[idx];
    for (const v of list[x]) {
      if (parents[v] !== 0) continue;
      parents[v] = x;
      queue.push(v);
    }
    idx++;
  }
  
  log(parents.filter((_, i) => i > 1).join('\n'));
};

solution(input);