// countingSort
function countingSort(arr) {
  const resultArray = new Array(100).fill(0);
  for(const element of arr){
      resultArray[element] += 1;
  }
  return resultArray;
}

// diagonalDifference
function diagonalDifference(arr) {
  let LtoRDiagonalSum = 0;
  let RtoLDiagonalSum = 0;
  const length = arr.length;
  
  for(let row = 0; row < length; row++){
      LtoRDiagonalSum += arr[row][row];
      RtoLDiagonalSum += arr[row][length - 1 - row];
  }
  
  const diagonalDiff = Math.abs(LtoRDiagonalSum - RtoLDiagonalSum);
  return diagonalDiff;
}

// lonelyInteger
function lonelyinteger(a) {
  const length = a.length;
  a.sort((a, b) => a - b);
  let answer = a[length - 1];
  for(let index = 1; index < length; index += 2){
      if(a[index] !== a[index - 1]){
           answer = a[index - 1];
           break;
      }
  }
  return answer;
}
