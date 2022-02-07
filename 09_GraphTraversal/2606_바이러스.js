const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M, computers] = [+input[0], input[1], input.slice(2).map(v => v.split(' ').map(Number))];

// 4 출력해야함
const DFS = (adj, visited, computer) => {
  adj[computer].forEach(value => {
    if (visited[value]) return;
    visited[value] = true;
    DFS(adj, visited, value);
  });
};

const solution = (n, computers) => {
  const visited = new Array(n + 1).fill(false);
  const adj = Array.from({ length: n + 1 }, () => []);

  computers.forEach(route => {
    adj[route[0]].push(route[1]);
    adj[route[1]].push(route[0]);
  });

  visited[1] = true;
  adj[1].forEach(computer => {
    if (visited[computer]) return;
    visited[computer] = true;
    DFS(adj, visited, computer);
  });

  log(visited.filter(v => v === true).length - 1);
};

solution(N, computers);
