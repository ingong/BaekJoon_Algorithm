const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [A, B, C] = input[0].split(' ').map(Number);
const pow = (a, b, c) => {
  if (b === 1) return BigInt(a % c);
  let val = pow(a, Math.floor(b / 2), c);
  val = val * val % c;
  if (b % 2 === 0) return BigInt(val);
  else return BigInt(val * a % c);
}

const result = pow(A, B, C);
log(result)