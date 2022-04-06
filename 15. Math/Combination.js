const log = console.log;
const target = ['a', 'b', 'c', 'd', 'e']
const selected = new Array(5).fill(false);
const answer = [];
const MAX = 5;
const COUNT = 3;

// 5개 중 3개를 고르는 재귀 조합 코드
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

// [1, 2, 3, 4] 에서 2개 선택해서 반환하기
function getCombination(array, selectedNum) {
    if (selectedNum === 1) return array.map(v => [v]);
    
    const results = [];
    array.forEach((fixed, index, origin) => {
        const sliced = origin.slice(index + 1);
        const combination = getCombination(origin, selectedNum - 1);
        combination.map(value => results.push([fixed, ...value]));
    })

    return results;
}

function getRepeatCombination(array, selectedNum) {
    if (selectedNum === 1) return array.map(v => [v]);
    
    const results = [];
    array.forEach((fixed, index, origin) => {
        const combination = getCombination(origin, selectedNum - 1);
        combination.map(value => results.push([fixed, ...value]));
    })

    return results;
}

const result1 = getCombination([1, 2, 3, 4], 2);
log(result1);