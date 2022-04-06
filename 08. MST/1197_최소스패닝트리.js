class DisjointSet{
  constructor(n) {
    this.parent = Array.from({ length: n + 1}, (_, i) => i);
  }

  union(n1, n2) {
    const rootA = this.find(n1);
    const rootB = this.find(n2);
    if (rootA < rootB) this.parent[rootB] = rootA;
    else this.parent[rootA] = rootB;
  }

  find(node) {
    if (this.parent[node] === node) return node;
    this.parent[node] = this.find(this.parent[node]);
    return this.parent[node];
  }

  connected(n1, n2) {
    if (this.find(n1) != this.find(n2)) return false;
    else return true;
  }
}

const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [V, E] = input[0].split(' ').map(Number);
const costs = input.slice(1).map(v => v.split(' ').map(Number));

const solve = (V, E, costs) => {
  costs.sort((a, b) => a[2] - b[2]);
  const disjointSet = new DisjointSet(V);
  let answer = 0;

  for (let i = 0; i < E; i++){
    const [from, to, cost] = costs[i];
    if (!disjointSet.connected(from, to)) {
      answer += cost;
      disjointSet.union(from, to);
    }
  }

  log(answer);
}

solve(V, E, costs);
// https://www.acmicpc.net/source/35535640

// 프로그래머스 섬연결하기
function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  const [from, to, cost] = costs.shift();
  const connected = new Set([from, to]);
  let answer = cost;
  // 정점의 수가 n 일 경우 종료, 간선의 수가 n - 1 일 때 종료할 수도 있음
  while (connected.size < n) {
    // 둘 중 하나만 연결된 경우가 costs 에 존재한다면 index 를 반환한다
    // 무조건 연결이 보장되어있다.
    const index = costs.findIndex(
      ([from, to]) =>
        (connected.has(from) && !connected.has(to)) || (connected.has(to) && !connected.has(from))
    );
    const [[from, to, cost]] = costs.splice(index, 1);
    answer += cost;
    connected.add(from).add(to);
  }
  return answer;
}