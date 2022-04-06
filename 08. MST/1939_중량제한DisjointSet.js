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

// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const array = input.slice(1, -1).map(v => v.split(' ').map(Number));
  const [start, end] = input[input.length - 1].split(' ').map(Number);
  const bridgesList = [] 
  
  for (const [from, to, weight] of array) {
    bridgesList.push({from, to, weight})
  }
  bridgesList.sort((a, b) => b.weight - a.weight);

  let answer = 0;
  const disjointSet = new DisjointSet(N + 1);
  for (let i = 0; i < bridgesList.length; i++){
    const { from, to, weight } = bridgesList[i];
    disjointSet.union(from, to);
    answer = weight;
    if (disjointSet.connected(start, end)) break;
  }
  log(answer);
};

solution(input);