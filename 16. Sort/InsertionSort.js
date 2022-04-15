const numbers = [99, 44, 6, 1, 5, 283, 4, 0];
const insertionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++){
    if (array[i] < array[0]) array.unshift(array.splice(i, 1)[0]);
    else {
      for (let j = 1; j < i; j++){
        if (array[j - 1] < array[i] && array[i] < array[j]) array.splice(j, 0, array.splice(i, 1)[0]);
      }
    }
  }
}

const insertionSort2 = (array) => {
  const length = array.length;
  for (let i = 1; i < length; i++){
    for (let j = i; j > 0; j--){
      if (array[j - 1] > array[j]) [array[j - 1], array[j]] = [array[j], array[j - 1]];
    }
  }
}

insertionSort2(numbers);
console.log(numbers); // [0, 1, 4, 5, 6, 44, 99, 283]