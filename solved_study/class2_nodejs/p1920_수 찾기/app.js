/*
Date: 7/11
No: 1920
Tier: 실버4
Name: 수찾기
Language: node.js
*/

/*
input_ex
5
4 1 5 2 3
5
1 3 7 9 5

output_ex
1
1
0
0
1
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const Aarr = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const Qarr = input[3].split(' ').map(Number);

function solution(N, Aarr, M, Qarr) {
    const set = new Set(Aarr);
    const result = [];

    for (let i = 0; i < M; i++) {
        if (set.has(Qarr[i])) {
            result.push(1);
        } else {
            result.push(0);
        }
    }

    return result;
}

console.log(solution(N, Aarr, M, Qarr).join('\n'));