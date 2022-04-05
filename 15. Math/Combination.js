const log = console.log;
const target = ['a', 'b', 'c', 'd', 'e']
const selected = new Array(5).fill(false);
const answer = [];
const MAX = 5;
const COUNT = 3;

// 5개 중 3개를 고르는 조합 코드
function combi(start, count) {
    if(count === COUNT){
        let str = ''
        for(let i = 0; i < MAX; i++){
            if(selected[i]) str += target[i];
        }
        return;
    }
    
    // i 를 start + 1 로 작성해도 되지만 중복조합과 중복순열에서 혼동을 줄 수 있어 i = start 로 작성
    for(let i = start; i < MAX; i++){
        if(selected[i] === true) continue;
        selected[i] = true;
        combi(i, count + 1);
        selected[i] = false;
    }
}

combi(0, 0);    

log('answer', answer);