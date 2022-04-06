// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('_TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const board = input.slice(1).map(v => v.split(' ').map(Number));
  let answer = Infinity;
  const selected = new Array(N).fill(false);

  const DFS = (idx, cnt) => {
    if (cnt === Math.floor(N / 2)) {
      const start = [];
      const link = [];
      for (let i = 0; i < N; i++){
        if (selected[i]) start.push(i);
        else link.push(i);
      }

      let startSum = 0, linkSum = 0;
      // Math.floor(N) 으로 작성하는 실수
      for (let i = 0; i < Math.floor(N / 2); i++){
        // j 가 아닌 i 로 종료조건을 명시하는 실수
        for (let j = i + 1; j < Math.floor(N / 2); j++){
          const [sa, sb] = [start[i], start[j]];
          const [la, lb] = [link[i], link[j]];
          startSum += (board[sa][sb] + board[sb][sa])
          linkSum += (board[la][lb] + board[lb][la]);
        }
      }

      const temp = Math.abs(startSum - linkSum);
      answer = Math.min(answer, temp);
      return;
    }
    
    for (let i = idx; i < N; i++){      
      selected[i] = true;
      DFS(i + 1, cnt + 1);
      selected[i] = false;
    }
  }

  DFS(0, 0);
  log(answer);
};

solution(input);