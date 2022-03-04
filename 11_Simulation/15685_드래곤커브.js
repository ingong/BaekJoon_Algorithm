// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const array = input.slice(1, N + 1).map(v => v.split(' ').map(Number));
  const board = Array.from({ length: 101 }, () => new Array(101).fill(0));

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  
  for (let i = 0; i < N; i++){
    let [x, y, d, g] = array[i];
    board[y][x] = true;
    
    const dirList = getDirList(d, g);
    log(dirList);
    for (const dir of dirList) {
      [x, y] = [x + dx[dir], y + dy[dir]]
      board[y][x] = true;
    }
  }
  
  function getDirList(d, g) {
    let answer = [d];
    for (let i = 1; i <= g; i++){
      let temp = [];
      for (let i = answer.length - 1; i > -1; i--){
        const previous = answer[i];
        const after = (previous + 1) % 4;
        temp.push(after);
      }
      
      answer.push(...temp);
    }
    return answer;
  }

  let answer = 0;
  for (let i = 0; i < 100; i++){
    for (let j = 0; j < 100; j++){
      if (board[i][j] && board[i + 1][j] && board[i][j + 1] && board[i + 1][j + 1]) answer++;
    }
  }
  log(answer);  
};

solution(input);
