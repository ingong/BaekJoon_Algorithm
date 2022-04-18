const log = console.log;

function solution(word) {
    const orders = {};
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let count = 1;
    dfs([], 0);
        
    function dfs(array, n){
        if(n === 6) return;
        
        if(array.length > 0) orders[array.join('')] = count++;
        for(let index = 0; index < 5; index++){
            array.push(vowels[index]);
            dfs(array, n + 1);
            array.pop();
        }
    }
    
    return orders[word];
}


function solution2(word) {
  const obj = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const plus = [781, 156, 31, 6, 1];
  return word
    .split("")
    .reduce((acc, ch, idx) => acc + obj[ch] * plus[idx] + 1, 0);
}
console.log(solution2("EIO"));