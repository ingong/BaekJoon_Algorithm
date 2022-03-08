const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('Test_Case/test.txt').toString().trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);
const visitors = input[1].split(' ').map(Number);

function solution(visitors, X) {
  let count = 1;
  let sum = visitors.slice(0, X).reduce((a, b) => a + b);
  let max = sum;

  for (let i = X; i < visitors.length; i++) {
    sum = sum + visitors[i] - visitors[i - X];
    if (sum === max) count++;
    else if (sum > max) {
      max = sum;
      count = 1;
    }
  }

  if (max === 0) console.log('SAD');
  else {
    console.log(max);
    console.log(count);
  }
}

solution(visitors, X);