const log = console.log;
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++){
    let minIndex = i;
    for (let j = i + 1; j < length; j++){
      if (array[j] < array[minIndex]) minIndex = j;
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
}

selectionSort(numbers);
log(numbers);