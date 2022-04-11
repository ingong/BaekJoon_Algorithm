// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const board = input.slice(1).map(v => v.split(' ').map(Number));
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let answer = 0;

  for(let limit = 1; limit <= 10; limit++){
    const visited = Array.from({length: N} , () => new Array(N).fill(false));
    let safeCount = 0;
    for(let row = 0; row < N; row++){
      for(let col = 0; col < N; col++){
        if(board[row][col] <= limit || visited[row][col]) continue;
        safeCount++;
        dfs(limit, visited, row, col);
      }
    }
    if(safeCount > answer) answer = safeCount;
  }

  function dfs(limit, visited, x, y){
    if(x < 0 || x >= N || y < 0 || y >= N) return;
    if(board[x][y] <= limit || visited[x][y]) return;
    visited[x][y] = true;

    for(let dir = 0; dir < 4; dir++){
      const [nx, ny] = [x + dx[dir], y + dy[dir]];      
      dfs(limit, visited, nx, ny);
    }
  }
  
  log(answer);
};

solution(input);