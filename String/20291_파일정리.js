const fs = require('fs');
// BAEKJOON
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = fs.readFileSync('TEST_CASE/index.txt').toString().trim().split('\n');
const log = console.log;
const [N, FileList] = [input[0], input.slice(1)];

const solution = fileList => {
  const extensionMap = new Map();
  fileList.forEach(file => {
    const fileExtension = file.match(/(?<=\.)\w+/gi)[0];
    if (!extensionMap.get(fileExtension)) extensionMap.set(fileExtension, 1);
    else {
      let count = extensionMap.get(fileExtension);
      extensionMap.set(fileExtension, ++count);
    }
  });

  const answer = [];
  extensionMap.forEach((value, key) => answer.push(key + ' ' + value));
  answer.sort((back, front) => (back > front ? 1 : back < front ? -1 : 0));
  log(answer.join('\n'));
};

solution(FileList);
// 확장자 별로 몇 개씩 있는지
// 보기 편하게 확장자들을 사전순으로 정렬
// 순회한다 .앞까지를 제거하고
// Map 에 추가한다
