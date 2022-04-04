// 에라토스테네스의 체: n까지의 수 중 소수의 개수
function astostenes(n) {
  let arr = Array(n + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++){
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i){
        arr[j] = false;
      }
    }
  }
  return arr.filter(v => v).length;
}


// 제곱근까지해서 소수 판별하기
const isPrime = (num) => { 
  if(num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num) ; i++) { 
      if (num % i === 0) return false; 
  } 
  return true; 
}

// 10진수를 n진수로 변환하기
const toNjinSu = (n, type) => n.toString(type);

// n진수를 10진수로 type은 원래 기존 진수
const toSipJinsu = (n, type) => Number.parseInt(n, type);