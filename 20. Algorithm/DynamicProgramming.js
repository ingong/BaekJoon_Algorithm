// cache와 closure
function addTo80() {
  const cache = {};
  return function(n) {
    if (n in cache) return cache[n];
    else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memoized = addTo80();
// console.log(memoized(5));
// console.log(memoized(5));

// fibonacci with recursion
// 0 1 1 2 3 5 8 13 ...
let calculate = 0;
function fibonacciR(n) {
  calculate++;
  if (n < 2) return n;
  else return fibonacciR(n - 1) + fibonacciR(n - 2);
}

console.log(fibonacciR(10));
// console.log(calculate);

function fibonacci() {
  const cache = {};  
  return function fib(number) {
    if (number in cache) return cache[number];
    else {
      if (number < 2) cache[number] = number;
      else cache[number] = fib(number - 1) + fib(number - 2); 
      
      return cache[number];
    }
  }
}

const fibo = fibonacci();
console.log(fibo(10));