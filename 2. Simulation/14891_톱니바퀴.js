// BAEKJOON
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// VSCODE : TEST_CASE 폴더 생성 후, 원하는 테스트 케이스를 index.txt 에 작성
const input = require('fs').readFileSync('TESTCASE/index.txt').toString().trim().split('\n');
const log = console.log;

const solution = (input) => {
  const toothList = input.slice(0, 4).map(v => v.split('').map(Number));
  const K = +input[4];
  const rotationList = input.slice(5).map(v => v.split(' ').map(Number));

  for (const [tooth, rotate] of rotationList) {
    const queue = [];
    const [LEFT, RIGHT] = [6, 2];
    const targetIndex = tooth - 1;
    queue.push([targetIndex, rotate]);

    // 1 번이라고 가정했을 때 (총 3번 순회) => 
    let [tempRightIndex, tempRotate] = [targetIndex, rotate];
    let rightCount = 1;
    while (rightCount < 4) {
      const nIndex = tempRightIndex + 1;
      if (nIndex >= 4) break;
      if (toothList[tempRightIndex][RIGHT] === toothList[nIndex][LEFT]) break;
      queue.push([nIndex, -tempRotate]);
      tempRotate = tempRotate * (-1);
      tempRightIndex = nIndex; // error
      rightCount++;
    }
    
    // 4 번이라고 가정했을 때 (총 4번 순회) <=
    let [tempLeftIndex, tempLeftRotate] = [targetIndex, rotate];
    let leftCount = 1;
    while (leftCount < 4) {
      const nIndex = tempLeftIndex - 1;
      if (nIndex < 0) break;
      if (toothList[tempLeftIndex][LEFT] === toothList[nIndex][RIGHT]) break;
      queue.push([nIndex, -tempLeftRotate]);
      tempLeftRotate = tempLeftRotate * (-1);
      tempLeftIndex = nIndex;
      leftCount++;
    }

    for (const [index, rotate] of queue) {
      if (rotate === 1) rotateClockWise(index);
      else rotateCounterClockWise(index);
    }
  }

  let answer = 0;
  for (let i = 0; i < 4; i++){
    if (toothList[i][0] === 0) continue;
    else answer = answer + (2 ** i) // error
  }
  log(answer);
  
  function rotateClockWise(index) {
    const target = toothList[index];
    const lastElement = target.pop();
    toothList[index] = [lastElement, ...target];
  }

  function rotateCounterClockWise(index) {
    const target = toothList[index];
    const firstElement = target.shift();
    toothList[index] = [...target, firstElement]; 
  }
};

solution(input);

