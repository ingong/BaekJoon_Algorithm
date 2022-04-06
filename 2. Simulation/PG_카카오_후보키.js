const log = console.log;

function solution(relation) {
    const design = `
    [o] combination으로 key조합 만들기 
    [o] unique한 key인지 확인: set 자료구조 활용
    [o] 최소성을 만족하는 키인지 확인하기 ()
    `;
    
    const columLength = relation[0].length;
    const keyList = Array.from({length: columLength}, (_, i) => i);
    let candidates = [];
    for(let i = 1; i <= columLength; i++){
        const result = getCombination(keyList, i);
        candidates.push(...result);
    }
    
    candidates = getUniqueKey(relation, candidates);
    candidates = getMinimalKey(candidates);
    
    return candidates.length;
}

function getMinimalKey(keyList){
    const result = [];
    
    while(keyList.length > 0){
        result.push(keyList[0]);
        keyList = keyList.reduce((acc, cur) => {
            // cur이 모두 key를 갖고 있다면 (포함관계가 존재)
            const isAllInclude = keyList[0].every(key => cur.includes(key));
            if(!isAllInclude) acc.push(cur);
            return acc
        }, []);
    }
    
    return result;
}

function getUniqueKey(relation, keyList){
    const result = [];
    keyList.forEach((key) => {
        const set = new Set();
        relation.forEach(rel => {
            set.add(rel.map((value, index) => key.includes(index) ? value : "").join(''));
        })
        if(set.size === relation.length) result.push(key);
    })
    return result;
}

function getCombination(array, selectedNum){
    const result = [];
    if(selectedNum === 1) return array.map(v => [v]);
    
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combination = getCombination(rest, selectedNum - 1);
        combination.forEach(array => result.push([fixed, ...array]));
    })
    
    return result;
}