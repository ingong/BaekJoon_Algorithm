const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const N = +input[0];
const numbers = input[1].split(' ').map(Number);
const operand = input[2].split(' ').map(Number);
const answer = [];
const result = [];


// 0 : + , 1 : -, 2 : *, 3 : /
const backTracking = (n) => {
  if (n === N - 1) {
    let tempSum = numbers[0];
    result.forEach((v, i) => {
      switch (v) {
        case 0:
          tempSum += numbers[i + 1];
          break;
        case 1:
          tempSum -= numbers[i + 1];
          break;
        case 2:
          tempSum *= numbers[i + 1];
          break;
        case 3:
          if (tempSum < 0) tempSum = -Math.floor(-tempSum / numbers[i + 1]);
          else tempSum = Math.floor(tempSum / numbers[i + 1]);         
          break;
        default:
          break;
      }
    })
    answer.push(tempSum);
    return;
  }

  for (let i = 0; i < 4; i++){
    if (operand[i] === 0) continue;
    operand[i]--;
    result.push(i);
    backTracking(n + 1);
    result.pop();
    operand[i]++;
  }
}

backTracking(0);
log(Math.max(...answer) + '\n' + Math.min(...answer));