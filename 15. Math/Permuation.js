const log = console.log;
const array = [1, 2, 3, 4];
const selectedNum = 2;
const selected = new Array(4).fill(false);
const answer = [];

// 이전 index를 기억할 필요가 없다
const permutation = (count) => {
  if (count === selectedNum) {
    const temp = [];
    selected.forEach((isSelected, index) => isSelected && temp.push(array[index]));
    answer.push(temp);
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