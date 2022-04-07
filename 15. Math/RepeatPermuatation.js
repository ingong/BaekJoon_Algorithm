const log = console.log;
const array = ['A', 'B', 'C', 'D'];
const selectedNum = 2;
const selected = [];
const answer = [];

const repeatPermutation = (count) => {
  if (count === selectedNum) {
    const temp = [];
    selected.forEach(v => temp.push(v));
    answer.push(temp);
    return;
  }

  for (let i = 0; i < 4; i++){
    selected.push(array[i]);
    repeatPermutation(count + 1);
    selected.pop();
  }
}

repeatPermutation(0);
log(answer);