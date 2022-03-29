const log = console.log;
function binarySearch() {
  let arr = [1, 2, 3, 5, 5, 5, 6, 6]; // 4
  let start = 0, end = arr.length - 1;
  const target = 5;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  log(end);
}

function lowerBound() {
  let arr = [1, 2, 3, 5, 6, 6]; // 4
  let key = 6; // return 4
  let start = 0, end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < key) start = mid + 1;
    else end = mid;
  }
  log(end);
}

lowerBound();
