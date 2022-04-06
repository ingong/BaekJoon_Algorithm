const log = console.log;

function solution(fees, records) {
    const map = {};
    const answer = [];
    
    for(let i = 0; i < records.length; i++){
        const [time, car] = records[i].split(' ');
        const [hour, minute] = time.split(':').map(v => Number(v));
        const minutes = hour * 60 + minute;
        if(!map[car]) map[car] = [minutes];
        else map[car].push(minutes);
    }
    
    const LAST_TIME = 23 * 60 + 59;
    const [BASE_TIME, BASE_RATE, UNIT_TIME, UNIT_RATE] = fees;
    const listSortByAscend = Object.keys(map).map(v => Number(v)).sort((a, b) => a - b).map(v => String(v).padStart(4, '0'));
    
    for(const car of listSortByAscend){
        const minuteList = map[car];
        if(minuteList.length % 2 !== 0) minuteList.push(LAST_TIME);
        let totalMinute = 0;
        for(let i = 1; i < minuteList.length; i += 2){
            totalMinute += (minuteList[i] - minuteList[i - 1]);
        }
        const diffMinute = totalMinute - BASE_TIME > 0 ? totalMinute - BASE_TIME : 0;
        const fee = BASE_RATE + (Math.ceil(diffMinute / UNIT_TIME) * UNIT_RATE);
        answer.push(fee);
    }
    
    return answer;
}