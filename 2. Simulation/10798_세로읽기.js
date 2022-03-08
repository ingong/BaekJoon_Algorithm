const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
// var input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const log = console.log;

const s = input.map(v => v.split('').reverse());

const maxColLen = Math.max(...input.map(v => v.length));
const stringList = Array.from({ length: maxColLen }, () => '');
const stringInput = input.map(v => v.padEnd(maxColLen));

for (let row = 0; row < 5; row++){
  for (let col = 0; col < maxColLen; col++){
    stringList[col] += stringInput[row][col];
  }
}
log(stringList.join('').replace(/\s+/g, ''));


let i = 0;
let result = ''
const temp = input.map(v => v.split(''));
while (i < 15) {
  temp.forEach(v => {
    if(v[i] !== undefined) result += v[i]
  })
  i++
}
log(result);



// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
// var arr = input;
// var result = "";
// var i = 0;
// while(i < 15) {
//     arr.map(function(b,idx,c){
//         if(b[i] && b[i] != '\r') {
//             result += b[i];
//         }
//         return b;
//     });
//     i++;
// }
// console.log(result);