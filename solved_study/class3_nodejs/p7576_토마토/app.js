

/*
Date: 8/11
No: 7576
Tier: 골드5
Name: 토마토
Language: node.js
*/

/*
input_ex
2 3 1
output_ex
11
*/


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const board = input.map(line => line.split(' ').map(Number));
//상하이동위한 세팅
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(row, col, board) {
    const q = [];
    const dist = [...Array(col)].map(() => Array(row).fill(0));
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (board[i][j] === 1) {
                q.push([i, j]);
            }
            if (board[i][j] === 0) {
                dist[i][j] = -1;
            }
        }
    }
    let head = 0;
    while (q.length > head) {
        const [x, y] = q[head++];
        for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
            if (dist[nx][ny] >= 0) continue;
            dist[nx][ny] = dist[x][y] + 1;
            q.push([nx, ny]);
        }
    }
    
    let day = 0;
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (dist[i][j] === -1) return -1;
            day = Math.max(day, dist[i][j]);
        }
    }
    return day;
}

console.log(solution(m, n, board));