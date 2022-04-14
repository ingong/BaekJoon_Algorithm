const numbers = [99, 44, 6, 1, 5, 283, 4, 0];
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
console.log(numbers); // [0, 1, 4, 5, 6, 44, 99, 283]