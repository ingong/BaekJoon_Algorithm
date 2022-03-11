// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('_TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const T = +input[0];
  const TestCase = Array.from({ length: T }, () => []);
  const inputList = input.slice(1).map(v => v.split(' ').map(Number));
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let index = -1; // little bit long but good
  for (let i = 0; i < inputList.length; i++){
    const [M, N, K] = inputList[i];
    if (K) TestCase[++index].push([M, N, K]);
    else TestCase[index].push([M, N]);
  }
  
  for (let i = 0; i < T; i++){
    traverse(TestCase[i]);
  }

  function traverse (list){
    const [M, N,] = list[0];
    const baechuList = list.slice(1);
    const visited = Array.from({ length: N }, () => new Array(M).fill(false));
    const graph = Array.from({ length: N }, () => new Array(M).fill(0)); 

    for (const baechu of baechuList) {
      const [y, x] = baechu; // error
      graph[x][y] = 1;
    }
    
    let answer = 0;
    for (let row = 0; row < N; row++){
      for (let col = 0; col < M; col++){
        if (!graph[row][col]) continue;
        if (visited[row][col]) continue;
        BFS(row, col, visited, graph, N, M);
        answer++; // error
      }
    }
    log(answer);
  }

  function BFS (row, col, visited, graph, N, M){
    const queue = [[row, col]];
    let queueIndex = 0;
    while (queueIndex < queue.length) {
      const [x, y] = queue[queueIndex];
      for (let i = 0; i < 4; i++){
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (graph[nx][ny] !== 1) continue;
        if (visited[nx][ny] === true) continue;
        queue.push([nx, ny]);
        visited[nx][ny] = true; // error
      }
      queueIndex++;
    }
  }

  
};

solution(input);