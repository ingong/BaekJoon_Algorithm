const log = console.log;

function solution(places) {
    const dx = [1, 0, 2, 0, 1, -1]; // 2 -> 0, 3 -> 1, 4 -> 0, 1
    const dy = [0, 1, 0, 2, 1, 1];
    const answer = [];
    
    for(let i = 0; i < 5; i++){
        const room = places[i].map(v => v.split(''));
        let flag = true;
        for (let row = 0; row < 5; row++){
            for (let col = 0; col < 5; col++){
                if(room[row][col] !== 'P') continue;
                if(!BFS(room, [row, col])){
                    flag = false;
                    break;
                }
            }
            // flag 가 false 이면 -> answer 에 0 을 넣고, break
            if(!flag){
                answer.push(0);
                break;
            }
        }
        if(flag) answer.push(1); // 여기까지 들어왔다는 이야기는 다 거리두기를 지키고 있다는 의미이므로 answer에 1을 넣는다 
    }
    
    
    function isUnValidPosition(x, y){
        return x < 0 || x >= 5 || y < 0 || y >= 5;
    }
    
    function BFS(room, pos){
        const [x, y] = pos;
        for(let i = 0; i < 6; i++){
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if(isUnValidPosition(nx, ny)) continue;
            
            switch(i){
                case 0:
                    if(room[nx][ny] === 'P') return false;
                    break;
                case 1:
                    if(room[nx][ny] === 'P') return false;
                    break;
                case 2:
                    if(room[nx][ny] === 'P' && room[x + dx[0]][y + dy[0]] === 'O') return false;
                    break;
                case 3:
                    if((room[nx][ny] === 'P') && room[x + dx[1]][y + dy[1]] === 'O') return false;
                    break;
                case 4:
                    if(room[nx][ny] === 'P' && (room[x + dx[1]][y + dy[1]] === 'O' || room[x + dx[0]][y + dy[0]] === 'O')) return false;
                    break;
                case 5:
                    if(room[nx][ny] === 'P' && (room[x + dx[1]][y + dy[1]] === 'O' || room[x - dx[0]][y - dy[0]] === 'O')) return false;
                    break;
            }
        }
        return true;
    }
    
    return answer;
}