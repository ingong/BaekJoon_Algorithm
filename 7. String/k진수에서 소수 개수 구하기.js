// 제곱근까지해서 소수 판별하기
const isPrime = (num) => { 
  if(num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num) ; i++) { 
      if (num % i === 0) return false; 
  } 
  return true; 
}

function solution(n, k) {
  const candidates = n.toString(k).split('0');
  return candidates.filter(v => isPrime(+v)).length;
}