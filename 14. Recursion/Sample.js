const log = console.log;

// N 부터 1 까지 출력
const answer = [];
function recur(N) {
  if (N === 0) return;
  log(N);
  recur(N - 1);
}

recur(3);
// 특정 입력에 대해서는 자기 자신을 호출하지 않고 종료되어야함 (Base Condition)
// 모든 입력은 base condition 으로 수렴해야한다
// 함수의 인자로 어떤 것을 받고 어디까지 계산한 후 자기 자신에게 넘겨줄지 명확하게 정해야함
// 한 함수가 자기 자신을 여러 번 호출하게 되면 비효율적일 수 있음 