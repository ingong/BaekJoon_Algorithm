const log = console.log;

function solution(lines) {
    const logs = [];
    const length = lines.length;
    
    for (const line of lines){
        const [date, endTime, processTime] = line.split(' ');
        const [hour, minute, sec] = endTime.split(':').map(v => Number(v));
        const cleanedProcessTime = +processTime.replace(/s/,'');
        const endTimeWithSecUnit = hour * 3600 + minute * 60 + sec;
        const startTimeWithSecUnit = Math.max(Number((endTimeWithSecUnit - cleanedProcessTime + 0.001).toFixed(3)), 0);
        logs.push([startTimeWithSecUnit, endTimeWithSecUnit]);
    }
    
    let answer = 0;
    for(let i = 0; i < length; i++){
        const endTime = logs[i][1] + 1;
        let count = 0;

        for(let j = i; j < length; j++){
            if(logs[j][0] < endTime) count++;
        }

        if(answer < count) answer = count;
    }
    
     return answer;
}