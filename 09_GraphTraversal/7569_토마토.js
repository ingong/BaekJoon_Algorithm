const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [M, N, H] = input[0].split(' ').map(Number); // 가로, 세로, 높이 -> 세로 row N / 가로 col M
  const tomatoInput = input.slice(1).map(v => v.split(' ').map(Number));
  const tomato = Array.from({ length: H }, () => []);
  for (let i = 0; i < H; i++){
    for (let j = i * N; j < (i + 1) * N; j++) tomato[i].push(tomatoInput[j])
  }
  
  const queue = [];
  const visited = Array.from({ length: H }, () => Array.from({ length: N }, () => new Array(M).fill(-1)));
  const dx = [0, 1, 0, -1, 0, 0];
  const dy = [1, 0, -1, 0, 0, 0];
  const dz = [0, 0, 0, 0, 1, -1];

  for (let h = 0; h < H; h++){
    for (let row = 0; row < N; row++){
      for (let col = 0; col < M; col++){
        if (tomato[h][row][col] === 1) {
          visited[h][row][col] = 0;
          queue.push([h, row, col]);
        } else if (tomato[h][row][col] === -1) visited[h][row][col] = 0;
      }
    }
  }

  if (isAllRipe()) {
    log(0);
    return;
  }

  let pointer = 0;
  while (pointer < queue.length) {
    const [z, x, y] = queue[pointer++];
    for (let i = 0; i < dx.length; i++){
      const [nz, nx, ny] = [z + dz[i], x + dx[i], y + dy[i]];
      if (nz < 0 || nz >= H || nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (visited[nz][nx][ny] >= 0) continue;
      visited[nz][nx][ny] = visited[z][x][y] + 1;
      queue.push([nz, nx, ny]);
    }
  }

  
  let answer = 0;
  for (let h = 0; h < H; h++){
    for (let row = 0; row < N; row++){
      for (let col = 0; col < M; col++){
        if (visited[h][row][col] === -1) {
          log(-1);
          return;
        }
        answer = Math.max(answer, visited[h][row][col]);
      }
    }
  }

  log(answer);

  function isAllRipe() {
    for (let h = 0; h < H; h++){
      for (let row = 0; row < N; row++){
        for (let col = 0; col < M; col++){
          if (tomato[h][row][col] === 0) return false;
        }
      }
    }
    return true;
  }
  
};

solution(input);