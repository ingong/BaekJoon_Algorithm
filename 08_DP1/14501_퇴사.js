const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [dDay, graph] = [+input[0], input.slice(1).map(v => v.split(' ').map(Number))];
const dp = new Array(dDay).fill(undefined);
// 점화식 : 오늘 일 안하고 내일 일하기 vs 오늘 일하기

const getMaxPay = n => {
  if (n >= dDay) return 0;
  if (dp[n] !== undefined) return dp[n];

  const [cost, profit] = graph[n];

  dp[n] = Math.max(
    getMaxPay(n + 1),
    n + cost - 1 < dDay ? profit + getMaxPay(n + cost) : getMaxPay(n + cost)
  );

  return dp[n];
};

const solution = () => {
  getMaxPay(0);
  log(dp[0]);
};

solution();
