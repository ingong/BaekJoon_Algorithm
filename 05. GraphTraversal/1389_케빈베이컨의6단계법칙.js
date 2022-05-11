// BAEKJOON
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
// const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const relations = input.slice(1).map(value => value.split(' ').map(Number));
  const acquaintGraph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(false));
  const kevinBaconGraph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(Infinity));
  for (const relation of relations) {
    const [one, two] = relation;
    acquaintGraph[one][two] = true;
    acquaintGraph[two][one] = true;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      const visited = new Array(N + 1).fill(false);
      visited[i] = true;
      DFS(i, j, i, 0, visited);
      const minValue = kevinBaconGraph[i][j];
      kevinBaconGraph[j][i] = minValue;
    }
  }
  
  const sumList = kevinBaconGraph.slice(1).map(array => array.reduce((acc, cur) => {
    if (cur === Infinity) return acc;
    else return acc + cur;
  }, 0))
  
  let answer = 0;
  let minValue = Infinity;
  for (let i = 0; i < N; i++) {
    if (sumList[i] < minValue) {
      answer = i + 1;
      minValue = sumList[i];
    }
  }
  log(answer);

  function DFS(start, from, node, count, visited) {
    if (node === from) {
      kevinBaconGraph[start][from] = Math.min(kevinBaconGraph[start][from], count)
      return;
    }

    for (let index = 1; index <= N; index++) {
      if (!acquaintGraph[node][index]) continue;
      if (visited[index]) continue;
      visited[index] = true;
      DFS(start, from, index, count + 1, visited);
      visited[index] = false;
    }
  }
  
};

solution(input);