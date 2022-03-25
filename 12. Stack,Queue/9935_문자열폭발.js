// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

// 1560ms
const solution1 = (input) => {
  const [string, target] = input;
  const targetL = target.length;
  const stack = [];
  for (let i = 0; i < string.length; i++){
    stack.push(string[i]);
    while (targetL <= stack.length) {
      const temp = stack.slice(-targetL).join('');
      if (temp === target) stack.splice(-targetL, targetL);
      else break;
    }
  }
  log(stack.length > 0 ? stack.join('') : 'FRULA')
};

// 312ms 
const solution2 = (input) => {
  const [string, target] = input;
  const targetL = target.length;
  const stack = [];
  
  for (let i = 0; i < string.length; i++){
    if (target[targetL - 1] === string[i]) {
      let flag = true;
      for (let j = 1; j < targetL; j++){
        if (target[targetL - 1 - j] !== stack[stack.length - j]) {
          flag = false;
          stack.push(string[i]); 
          break;
        }
      }
      if (flag) {
        let count = targetL - 1;
        while (count--) stack.pop();
      } 
    } else stack.push(string[i]);
  }
  

  log(stack.length > 0 ? stack.join('') : 'FRULA');
}


solution2(input);