const log = console.log;
const target = ['a', 'b', 'c', 'd', 'e']
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
    selected[cnt] = target[i];
    combiWithRep(i, cnt + 1);
  }
}

combiWithRep(0, 0);
log('answer:', answer);