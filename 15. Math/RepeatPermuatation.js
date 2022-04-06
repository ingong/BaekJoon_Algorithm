const log = console.log;

const getRepeatPerumtation = (array, selectedNum) => {
  if (selectedNum === 1) return array.map(v => [v]);
  const result = [];

  array.forEach((fixed, index, origin) => {
    const permuation = getRepeatPerumtation([...origin], selectedNum - 1);
    permuation.map(value => result.push([fixed, ...value]))
  })

  return result;
}

// [1, 2, 3, 4] 에서 2개를 갖는 중복 순열 반환하기
const result = getRepeatPerumtation([1, 2, 3, 4], 2);
log(result);

const array = [1, 2, 3, 4];
const selectedNum = 2;
const selected = [];
const answer = [];
const repeatPermutation = (count) => {
  if (count === selectedNum) {
    answer.push(selected);
    return;
  }

  for (let i = 0; i < 4; i++){
    selected.push(array[i]);
    repeatPermutation(count + 1);
    selected.pop();
  }
}

repeatPermutation(0);

log([1, 2, 3].includes([1, 2]))