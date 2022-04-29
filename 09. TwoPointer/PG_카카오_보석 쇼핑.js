const log = console.log;

function solution(gems) {
    const gemSet = new Set(gems);
    const gemSetSize = gemSet.size
    const gemLength = gems.length;
    const gemDict = {};
    for (const gem of gemSet) gemDict[gem] = 0;
    
    const answer = [];
    let start = 0, end = 0, kinds = 0;
    while (true) {
        if (kinds === gemSetSize) {
            const gem = gems[start];
            gemDict[gem]--;
            if(gemDict[gem] === 0) kinds--;
            start++;
        }
        else if (end === gemLength) break;
        else {
            const gem = gems[end];
            gemDict[gem]++;
            if(gemDict[gem] === 1) kinds++;
            end++;
        }
        
        if (kinds === gemSetSize) answer.push([start + 1, end]);
    }
    
    const [START, END] = [0, 1];
    answer.sort((a, b) => {
        const aLength = a[END] - a[START];
        const bLength = b[END] - b[START];
        if (aLength !== bLength) return aLength - bLength;
        else if (aLength === bLength) return a[START] - b[START];
    })
    
    return answer[0];
}