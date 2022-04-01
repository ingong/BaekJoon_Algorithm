const array = [2, 7, 11, 11, 16, 19, 22, 22, 22, 32];
const n = 10;
const log = console.log;
const answer = find(20);
console.log(answer);

function find(target) {
  let start = 0;
  let end = 10;
  let count = 0;
  const temp = [];
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid] < target) start = mid + 1;
    else end = mid;
    // temp.push({ count: [start, mid, end] })
    // if (count++ === 10) break;
  }
  log(temp);
  return start - 1;
}