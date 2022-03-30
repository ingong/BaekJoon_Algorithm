function binarySearch(target, array) {
  let [start, end] = [0, array.length - 1];
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (array[mid] < target) start = mid + 1;
    else if (array[mid] > target) end = mid - 1;
    else return 1;
  }

  return 0;    
}