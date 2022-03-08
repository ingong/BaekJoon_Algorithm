const N = 10;
const visited = new Array(N).fill(false);
const output = [];
let result = '';

function backTracking(cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    output.push(i + 1);
    backTracking(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}