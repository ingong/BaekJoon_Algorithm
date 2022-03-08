const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;

const palin = (start, end, string, delCount) => {
  if (delCount === 2) return 2;
  else {
    while (start <= end) {
      if (string[start] !== string[end]) {
        const startPalin = palin(start + 1, end, string, delCount + 1);
        const endPalin = palin(start, end - 1, string, delCount + 1);
        return startPalin <= endPalin ? startPalin : endPalin;
      }
      start += 1;
      end -= 1;
    }
    return delCount;
  }
};

const stringList = input.slice(1);
stringList.forEach(string => {
  const result = palin(0, string.length - 1, string, 0);
  log(result);
});
