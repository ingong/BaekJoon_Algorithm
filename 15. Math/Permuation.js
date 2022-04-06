const log = console.log;
const array = [1, 2, 3, 4];
const selectedNum = 2;

const getPerumtation = (array, selectedNum) => {
  if (selectedNum === 1) return array.map(v => [v]);
  const result = [];

  array.forEach((fixed, index, origin) => {
    let rest = [...origin];
    rest.splice(index, 1);
    const permuation = getPerumtation(rest, selectedNum - 1);
    permuation.map(value => result.push([fixed, ...value]))
  })

  return result;
}

const selected = new Array(4).fill(false);
const answer = [];
const permutation = (count) => {
  if (count === selectedNum) {
    const temp = [];
    selected.forEach((isSelected, index) => isSelected && temp.push(array[index]));
    return;
  }

  for (let i = 0; i < 4; i++){
    if (selected[i]) continue;
    selected[i] = true;
    permutation(count + 1);
    selected[i] = false;
  }
}

permutation(0);
log(answer);

// [1, 2, 3, 4] 에서 2개를 갖는 순열 반환하기
const result = getPerumtation([1, 2, 3, 4], 2);
log(result);