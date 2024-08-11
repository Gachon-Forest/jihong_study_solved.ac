
/*
Date: 8/10
No: 1679
Tier: 실버1
Name: 숨바꼭질
Language: node.js
*/

/*
input_ex
5 17
output_ex
4
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [subin, sister] = input[0].split(' ').map(Number);

let answer = 0;
let queue = [[subin, 0]];
let visited = Array(100001).fill(false);
let head = 0;
let tail = 0;

while (head <= tail) {
    let [state, level] = queue[head++];

    if (visited[state]) continue;
    if (state === sister) {
        answer = level;
        break;
    }

    visited[state] = true;

    // 다음 가능한 위치들을 큐에 추가
    if (state + 1 <= 100000) queue.push([state + 1, level + 1]);//+1
    if (state - 1 >= 0) queue.push([state - 1, level + 1]);//-1
    if (state * 2 <= 100000) queue.push([state * 2, level + 1]);//*2

    tail = queue.length - 1;
}

console.log(answer);