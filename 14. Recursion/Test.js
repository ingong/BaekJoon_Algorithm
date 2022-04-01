const log = console.log;
// const arr = [[0, 2, 2, 3, 5, 5], [0, 2, 2, 10, 5, 5]];
// log('1:', arr)


// arr.sort((a, b) => sortByBehindMax(a, b));

// log('2:',arr);

// const arr2 = [[1, 2, 3], [3, 4, 5]];

// function sortByBehindMax(a, b) {
//   for (let i = 5; i >= 0; i--){
//     if (a[i] - b[i] > 0) return 1;
//     else if (a[i] - b[i] < 0) return -1;
//     else continue;
//   }
// }

// const c = [1, 2, 3];

// c.sort((a, b) => {
//   log(b - a);
//   return b - a;
// })
// log(c);

// // log('2:', 3arr)
const a = [1, 2, 3];
a.sort((a, b) => {
  log('a, b:', a, b);
  return a - b;
})