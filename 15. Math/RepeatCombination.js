const log = console.log;
const target = ['a', 'b', 'c', 'd', 'e']
// 조합과의 차이는 조합은 selected의 크기가 전체 배열의 크기와 같고, 선택 여부를 반영했다면
// 중복조합에서는 선택한 숫자를 selected에 넣음
const selected = new Array(3).fill(0);
const answer = [];
const MAX = 5;
const COUNT = 3;
// nHr=n+r−1Cr
const combiWithRep = (start, cnt) => {
  if (cnt === COUNT) {
    let temp = '';
    for (let i = 0; i < COUNT; i++){
      temp += selected[i];
    }
    answer.push(temp);
    return;
  }

  for (let i = start; i < MAX; i++){
    // 선택한 숫자를 selected 에 넣는다
    selected[cnt] = target[i];
    // 이래서 조합뒤에 i를 넣는구나.. 헷갈린다는 표현을 이해했다.
    combiWithRep(i, cnt + 1);
  }
}

combiWithRep(0, 0);
log('answer:', answer);


function getRepeatCombination(array, selectedNum) {
  if (selectedNum === 1) return array.map(v => [v]);
  
  const results = [];
  array.forEach((fixed, index, origin) => {
      const combination = getCombination(origin, selectedNum - 1);
      combination.map(value => results.push([fixed, ...value]));
  })

  return results;
}

const result2 = getRepeatCombination([1, 2, 3, 4], 2);
log(result2);