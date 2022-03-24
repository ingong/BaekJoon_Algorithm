// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const array = input.slice(1, -1).map(v => v.split(' ').map(Number));
  const [from, to] = input[input.length - 1].split(' ').map(Number);
  const bridges = Array.from({ length: N }, () => []);
  let maxWeight = 0;
  
  for (const [from, to, weight] of array) {
    bridges[from - 1].push([to - 1, weight])
    bridges[to - 1].push([from - 1, weight])
    if (weight > maxWeight) maxWeight = weight;
  }
  
  const BFS = (cost) => {
    const visited = new Array(N).fill(false);
    const queue = [];
    queue.push(from - 1);
    visited[from - 1] = true;
    let queueIndex = 0;
    while (queueIndex < queue.length) {
      const city = queue[queueIndex];

      if (city === to - 1) return true;
      for (let i = 0; i < bridges[city].length; i++){
        const [nCity, nCost] = bridges[city][i];
        if (!visited[nCity] && cost <= nCost) {
          visited[nCity] = true;
          queue.push(nCity);
        }
      }
      queueIndex++;
    }
    return false;
  }
  
  let left = 0, right = maxWeight;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (BFS(mid)) left = mid + 1;
    else right = mid - 1;
  }
  log(right);
};

solution(input);

const design = `
    weights에 값을 넣는다
    꺼낸다.
    bridges 해당 열을 순회한다
    - -1 이면 continue
    - weights 에는 지금 들어있는 값과 비교해서 최대값을 넣는다.
    - 해당 값을 queue 에 넣는다
    순회가 끝나면 queueIndex++
  
  `