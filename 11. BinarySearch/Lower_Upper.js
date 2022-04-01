// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const N = +input[0];
  const cardList = input[1].split(' ').map(Number);
  const M = +input[2];
  const shouldFind = input[3].split(' ').map(Number);
  cardList.sort((a, b) => a - b);
  const answer = [];

  for (const v of shouldFind) {
    const s = underIdx(cardList, v);
    const e = upperIdx(cardList, v);
    answer.push(e - s);
  }
  log(answer.join(' '));

  function underIdx(cardList, target) {
    let [start, end] = [0, cardList.length];
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (cardList[mid] < target) start = mid + 1;
      else end = mid;
    }
    return start;
  }

  function upperIdx(cardList, target) {
    let [start, end] = [0, cardList.length];
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (cardList[mid] <= target) start = mid + 1;
      else end = mid;
    }
    return start;
  }
};

solution(input);