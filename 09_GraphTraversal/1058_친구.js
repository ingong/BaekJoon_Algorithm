const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const N = +input[0];
const table = input.slice(1).map(v => v.split(''));
const friends = Array.from({ length: N }, () => new Array(N).fill(false));

const knowFriend = (i, j) => {
  for (let k = 0; k < N; k++){
    if (i === k || j === k) continue;
    if (table[j][k] === 'Y' && !friends[i][k]) friends[i][k] = true;
  }
};

for (let i = 0; i < N; i++){
  for (let j = 0; j < N; j++){
    if (i === j) continue;
    if (table[i][j] === 'Y') {
      friends[i][j] = true;
      knowFriend(i, j);
    }
  }
}

log(Math.max(...friends.map(f => f.filter(v => v === true).length)));