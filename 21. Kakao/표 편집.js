const log = console.log;

class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

function solution(n, k, cmd) {
    const stack = [];
    const start = new Node(0);
    let curNode = start;
    for (let i = 1; i < n; i++) {
        const node = new Node(i);
        curNode.next = node;
        node.prev = curNode;
        curNode = node;
    }
    curNode = start;
    
    // curNode를 행번호가 k인 노드로 변경
    let count = 0;
    while (count < k) {
        curNode = curNode.next;
        count++;
    }
    
    for (const element of cmd) {
        let [command, step] = element.split(' ');
        step = Number(step);
        if (command === 'U') {
            let count = 0;
            while (count < step) {
                curNode = curNode.prev;
                count++;
            }
        } else if (command === 'D') {
            let count = 0;
            while (count < step) {
                curNode = curNode.next;
                count++;
            }
        } else if (command === 'C') {
            // stack
            stack.push(curNode);
            
            // 이전 노드와 다음 노드에 대한 설정
            const prevNode = curNode.prev;
            const nextNode = curNode.next;
            if (prevNode) prevNode.next = nextNode;
            if (nextNode) nextNode.prev = prevNode;
            
            // 현재 노드 설정
            if (nextNode) curNode = nextNode;
            else curNode = prevNode;
        } else if (command === 'Z') {
            const recoveredNode = stack.pop();
            const prevNode = recoveredNode.prev;
            const nextNode = recoveredNode.next;
            if(prevNode) prevNode.next = recoveredNode;
            if(nextNode) nextNode.prev = recoveredNode;
        }
        
    }
    
    const answer = new Array(n).fill('O');
    for (const node of stack) {
        const value = node.value;
        answer[value] = 'X';
    }
    
    return answer.join('');
}