// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const [sx, sy, sd] = input[1].split(' ').map(Number);
  const board = input.slice(2).map(v => v.split(' ').map(Number));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const queue = [[sx, sy, sd]];
  visited[sx][sy] = true;
  let queueIndex = 0;
  while (queueIndex < queue.length) {
    const [x, y, d] = queue[queueIndex];
    let dir = d;
    let isCleanable = false;
    for (let i = 0; i < 4; i++){
      dir = (dir + 3) % 4;
      const [nx, ny, nd] = [x + dx[dir], y + dy[dir], dir];
      if (nx < 0 || nx > N || ny < 0 || ny > M) continue;
      if (board[nx][ny] === 1 || visited[nx][ny] === true) continue;
      queue.push([nx, ny, nd]);
      visited[nx][ny] = true;
      isCleanable = true;
      break;
    }

    if (!isCleanable) {
      const backDir = (dir + 2) % 4;
      const [bx, by] = [x + dx[backDir], y + dy[backDir]];
      if (board[bx][by] === 1) break;
      else {
        queue.push([bx, by, dir]);
      }
    }
    
    queueIndex++;
  }
  
  let answer = 0;
  for (let row = 0; row < N; row++){
    for (let col = 0; col < M; col++){
      if (visited[row][col]) answer++;
    }
  }
  log(answer);  
};

solution(input);