// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const [N, M, X, Y, K] = input[0].split(' ').map(Number);
  const board = input.slice(1, 1 + N).map(v => v.split(' ').map(Number));
  const commands = input[input.length - 1].split(' ').map(Number);
  const answer = [];
  let position = [X, Y];
  const dice = new Array(6).fill(0); 
  const dx = [0, 0, -1, 1] // 동 서 북 남
  const dy = [1, -1, 0, 0];
  
  for (let i = 0; i < commands.length; i++){
    const command = commands[i];
    const [cx, cy] = [dx[command - 1], dy[command - 1]];
    const [nx, ny] = [position[0] + cx, position[1] + cy];
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    changeDice(command); // diceMove
    position = [nx, ny];
    if (board[nx][ny] === 0) {
      board[nx][ny] = dice[5];
    } else {
      dice[5] = board[nx][ny]; // 주사위 바닥면으로 해당 수가 복사
      board[nx][ny] = 0; // 칸의 수는 0 
    }
    answer.push(dice[0]) 
  }

  for (const v of answer) log(v);
  
  function changeDice(command){
    const vertical = [1, 0, 4, 5];
    const south = [vertical[3], ...vertical.slice(0, 3)];
    const north = [...vertical.slice(1, 4), vertical[0]];
    const horizontal = [0, 2, 5, 3];
    const east = [horizontal[3], ...horizontal.slice(0, 3)];
    const west = [...horizontal.slice(1, 4), horizontal[0]];
    
    let target, array;
    if (command === 3 || command === 4) target = vertical;
    else target = horizontal;
    
    switch (command) {
      case 1:
        array = east;
        break;
      case 2:
        array = west;
        break;
      case 3:
        array = north;
        break;
      case 4:
        array = south;
        break;
      default:
        break;
    }
    const temp = target.map(v => dice[v]);
    for (let i = 0; i < 4; i++) dice[array[i]] = temp[i];
  }
};

solution(input);