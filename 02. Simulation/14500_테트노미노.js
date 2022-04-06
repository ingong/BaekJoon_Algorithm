const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(v => v.split(' ').map(Number));
let answer = 0;

const one = [[[0, 0], [0, 1], [0, 2], [0, 3]], [[0, 0], [1, 0], [2, 0], [3, 0]]]; // 2가지, 각자 요소의 마지막을 확인하고 각자 최대값을 산출한다.
const two = [[[0, 0], [0, 1], [1, 0], [1, 1]]]; // 1가지, 마지막 요소로 확인

// ㄴ
const three = [
  [[0, 0], [-1, 0], [0, 1], [0, 2]],
  [[0, 0], [0, 1], [0, 2], [-1, 2]],
  [[0, 0], [1, 0], [0, 1], [0, 2]],
  [[0, 0], [0, 1], [0, 2], [1, 2]],
  [[0, 0], [1, 0], [2, 0], [2, 1]],
  [[0, 0], [0, 1], [-1, 1], [-2, 1]],
  [[0, 0], [0, 1], [1, 0], [2, 0]],
  [[0, 0], [0, 1], [1, 1], [2, 1]],
]; 

// ㄴㄱ
const four = [
  [[0, 0],[1, 0], [1, 1], [2, 1]],
  [[0, 0],[0, 1], [-1, 1], [-1, 2]],
  [[0, 0],[1, 0], [1, -1], [2, -1]],
  [[0, 0],[0, 1], [1, 1], [1, 2]]
]; // 4가지, 마지막 요소로 확인

// ㅜ
const five = [
  [[0, 0],[0, 1], [0, 2], [-1, 1]],
  [[0, 0],[1, 0], [2, 0], [1, 1]],
  [[0, 0],[0, 1], [0, 2], [1, 1]],
  [[0, 0],[1, 0], [1, -1], [2, 0]],
]; // 4가지, 마지막 2개 요소에 대한 점검

const isUnValidBlock = (row, col, value) => row + value[0] < 0 ||  row + value[0] >= N || col + value[1] < 0 || col + value[1] >= M;

const calculate = (zero, row, col, first, second, third) => {
  if (isUnValidBlock(row, col, first) || isUnValidBlock(row, col, second) || isUnValidBlock(row, col, third)) return;
  const temp0 = board[row + zero[0]][col + zero[1]];
  const temp1 = board[row + first[0]][col + first[1]];
  const temp2 = board[row + second[0]][col + second[1]];
  const temp3 = board[row + third[0]][col + third[1]];
  const tempSum = temp0 + temp1 + temp2 + temp3;
  answer = Math.max(answer, tempSum);
}

for (let row = 0; row < N; row++){
  for (let col = 0; col < M; col++){
    one.forEach(([zero, first, second, third]) => calculate(zero, row, col, first, second, third));
    two.forEach(([zero, first, second, third]) => calculate(zero, row, col, first, second, third));
    three.forEach(([zero, first, second, third]) => calculate(zero, row, col, first, second, third));
    four.forEach(([zero, first, second, third]) => calculate(zero, row, col, first, second, third));
    five.forEach(([zero, first, second, third]) => calculate(zero, row, col, first, second, third));
  }
}

log(answer);
