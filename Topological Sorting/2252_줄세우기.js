const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M] = input[0].split(' ').map(Number);
const array = input.slice(1).map(v => v.split(' ').map(Number));

const adj = Array.from({ length: N + 1 }, () => []);
const indegree = new Array(N + 1).fill(0);
const queue = [];
const answer = [];

for (const [first, second] of array) {
  indegree[second] += 1;
  adj[first].push(second);
}

for (let i = 1; i <= N; i++){
  if (indegree[i] === 0) queue.push(i);
}

let head = 0;
while (head < queue.length) {
  const cur = queue[head++];
  answer.push(cur);
  
  for (const v of adj[cur]) {
    indegree[v] -= 1;
    if (indegree[v] === 0) queue.push(v);
  }
}

log(answer.join(' '));
// https://www.acmicpc.net/source/25698776