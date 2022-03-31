const log = console.log;

function solution(n, info) {
    const results = [];
    const array = new Array(11).fill(0);
    let maxSum = -Infinity;
    dfs(n, 0, array);
    
    if(maxSum === -Infinity) return [-1];
    else{
        const resultWithOutOne = [...results].filter(v => v !== -1);
        const candidates = resultWithOutOne.filter(v => getDiffSum(v) === maxSum);
        candidates.sort((a, b) => sortByBehindMax(a, b));
        return candidates[0];
    }
    
    function sortByBehindMax(a, b) {
          for (let i = 10; i >= 0; i--){
            if (a[i] - b[i] > 0) return -1;
            else if (a[i] - b[i] < 0) return 1;
            else continue;
          }
    }
    
    function getDiffSum(array){
        return array
            .map((v, i) => {
                if(v - info[i] > 0) return 10 - i
                else if (v - info[i] < 0) return -(10 - i);
                else return 0;
              })
            .reduce((a, b) => a + b, 0);
    }
    
    function dfs(n, index, array){
        if(index === 12){
            const tempArr = array;
            if(n !== 0) tempArr[10] += n;
            const sum = getDiffSum(tempArr);
            if(sum > 0){
                if(sum >= maxSum){
                    results.push(tempArr);
                    maxSum = sum;
                }
            }
            else {
                if(!results.includes(-1)) results.push([-1]);
                
            }
            return;
        }
        
        if(n > info[index]){
            const temp = [...array];
            const count = info[index] + 1;
            temp[index] = count;
            dfs(n - count, index + 1, temp);
        }
        dfs(n, index + 1, array);
    }
}