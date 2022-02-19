const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M] = input[0].split(' ').map(Number);
const move = [1, -1, 2]
const dist = new Array(200001).fill(-1);
const queue = [];

const BFS = () => {
  queue.push(N);
  dist[N] = 0;
  
  while (queue.length) {
    const pos = queue.shift();
    if (pos === M) return 0;
    
    for (let i = 0; i < 3; i++){
      let npos;
      if (i === 2) npos = pos * move[i];
      else npos = pos + move[i];
  
      if (npos < 0 || npos > 200000) continue;
      if (dist[npos] !== -1) continue;
      
      queue.push(npos);
      dist[npos] = dist[pos] + 1;    
    }
  }
}

BFS();
log(dist[M]);
log(dist[200001]);
