const log = console.log;
const array = [5, 3, 2, 1, 10, 7];

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--){
    for (let j = 0; j < i; j++){
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

bubbleSort(array);
log(array);