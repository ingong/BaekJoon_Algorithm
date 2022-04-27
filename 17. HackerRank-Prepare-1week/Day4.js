// 1번 문제
function gridChallenge(grid) {
  const sortedRowGrid = grid.map((row) => [...row].sort().join(''));
  const rowLength = grid.length;
  const colLength = grid[0].length;
  let isColumnAscending = 'YES';
  
  for(let col = 0; col < colLength; col++){
      for(let row = 1; row < rowLength; row++){
          if(sortedRowGrid[row][col] < sortedRowGrid[row - 1][col]){
              isColumnAscending = 'NO';
              break;
          }
      }
  }
  
  return isColumnAscending;
}

// 2번 문제
function digSum(n){
  if (n == 0) return 0;
  return BigInt(n) % BigInt(9) == 0 ? 9 : (BigInt(n) % BigInt(9));
}

function superDigit(n, k) {
  const oneDigit = Number(digSum(n));
  let tempNumber = 0;
  let count = 0;
  while(count < k){
      tempNumber += oneDigit;
      count++;    
  }
  return digSum(tempNumber);
}