const numbers = [99, 44, 6, 1, 5, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) return array;
  
  const midIndex = Math.floor(array.length / 2);
  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
  }
  return [...result, ...left, ...right];
}

const answer = mergeSort(numbers);
console.log(answer); // [0, 1, 4, 5, 6, 44, 99, 283]