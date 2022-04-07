const log = console.log;
const target = ['a', 'b', 'c', 'd']
const COUNT = 2;
const selected = [];
const answer = [];

// 조합과의 차이는 조합은 selected의 크기가 전체 배열의 크기와 같고, 선택 여부를 반영했다면
// 중복조합에서는 선택한 숫자를 selected에 넣음
// nHr=n+r−1Cr => 4H2 = 10
const combiWithRep = (start, count) => {
  if (count === COUNT) {
    const temp = [];
    selected.forEach(v => temp.push(v));
    answer.push(temp);
    return;
  }

  for (let i = start; i < 4; i++){
    selected.push(target[i]);
    combiWithRep(i, count + 1);
    selected.pop();
  }
}

combiWithRep(0, 0);
log('answer:', answer);
