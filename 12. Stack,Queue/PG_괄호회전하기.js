const log = console.log;

function solution(s) {
    if(s.length === 1) return 0;
    let count = 0, answer = 0;
    let array = [...s];
    
    while(count < array.length){
        if(isValidBracket(array)) answer++;
        const firstElement = array.shift();
        array = [...array, firstElement];
        count++;
    }
    
    return answer
}

function isValidBracket(string){
    const bracket = {']': '[', ')': '(', '}': '{'};
    const stack = [];
    
    for(let i = 0; i < string.length; i++){
        if(!Object.keys(bracket).includes(string[i])) stack.push(string[i]);
        else {
            if(stack && bracket[string[i]] === stack[stack.length - 1]) stack.pop();
            else return false;
        }
    }
    
    return stack.length > 0 ? false : true;
}