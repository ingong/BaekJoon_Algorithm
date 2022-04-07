const log = console.log;
const target = ['a', 'b', 'c', 'd', 'e']
const selected = new Array(5).fill(false);
const answer = [];
const MAX = 5;
const COUNT = 3;

// 이전 index 를 기억해야하고, 뽑는 개수를 기억해야한다
function combi(start, count) {
    if(count === COUNT){
        let str = ''
        for(let i = 0; i < MAX; i++){
            if(selected[i]) str += target[i];
        }
        return;
    }
    
    for(let i = start; i < MAX; i++){
        if(selected[i] === true) continue;
        selected[i] = true;
        combi(i, count + 1);
        selected[i] = false;
    }
}

combi(0, 0);    
log('answer', answer);