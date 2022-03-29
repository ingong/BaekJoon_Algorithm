const log = console.log;

function solution(info, query) {
    const map = {};
    for(let i = 0; i < info.length; i++){
        const array = info[i].split(' ');
        const score = +array.pop();
        combination(0, "", array, score);
    }
    
    for(let i in map){
        map[i].sort((a, b) => a - b);
    }
    
    const answer = [];
    
    for(let i = 0; i < query.length; i++){
        const arr = query[i].replace(/ and /g, ' ').split(' ');
        const score = Number(arr.pop());
        const key = arr.join('');
        const scoreArray = map[key];
        if(!scoreArray) answer.push(0);
        else {
            let start = 0, end = scoreArray.length;
            while(start < end){
                const mid = Math.floor((start + end) / 2);
                if(scoreArray[mid] < score) start = mid + 1;
                else end = mid;
            }
            answer.push(scoreArray.length - end);
        }
    }
    
    function combination(cnt, key, arr, score){
        if(cnt === 4){
            if(!map[key]) map[key] = [score];
            else map[key].push(score);
            return;
        }

        combination(cnt + 1, key + arr[cnt], arr, score);
        combination(cnt + 1, key + '-', arr, score);
    }

    return answer;
}