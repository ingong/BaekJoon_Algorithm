// 5개 중 3개의 숫자를 산출하는 조합을 만들자.
// 10 개의 결과가 출력되어야한다
const MAX = 5;
const list = [1, 2, 3, 4, 5];
const selected = new Array(5).fill(false);
const log = console.log;
let count = 0;

const DFS = (start, cnt) => {
  if (cnt === 2) {
    const answer = [];
    for (let i = 0; i < MAX; i++){
      if (selected[i]) answer.push([list[i]]);
    }
    return;
  }

  for (let i = start; i < MAX; i++){
    if (selected[i]) continue;
    selected[i] = true;
    DFS(i, cnt + 1);
    selected[i] = false;
  }
}

DFS(0, 0);
// i 와 index 혼동
// 종료조건에서 return 명시
