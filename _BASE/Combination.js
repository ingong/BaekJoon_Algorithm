const MAX = 5; // 배열의 길이
const LIMIT = 3;
const target = [];
const answer = [];

function DFS(idx, cnt) {
  if (cnt === LIMIT) {
    console.log(target);
    return;
  }
    
  for (let i = idx; i < MAX; i++){
    target.push(i);
    DFS(i + 1, cnt + 1);
    target.pop();
  }
}

DFS(0, 0);