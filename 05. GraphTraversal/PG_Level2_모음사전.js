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