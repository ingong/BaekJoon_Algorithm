const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('Test_Case/test.txt').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const iceBucketArray = input.slice(1).map(v => v.split(' ').map(Number));

// 풀이
function solution(iceBucketArray, K) {
  const fence = new Array(1000001).fill(0);
  iceBucketArray.forEach(([ice, coor]) => (fence[coor] = ice));
  let step = 2 * K + 1;
  let sum = 0;
  let answer = 0;

  for (let i = 0; i < fence.length; i++) {
    if (i >= step) sum -= fence[i - step];
    sum += fence[i];
    answer = Math.max(answer, sum);
  }

  return answer;
}

console.log(solution(iceBucketArray, K));