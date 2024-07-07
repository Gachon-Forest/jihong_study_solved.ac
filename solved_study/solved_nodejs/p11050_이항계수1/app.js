/*
Date: 7/8
No: 11050
Tier: 브론즈1
Name: 이항계수1
Language: node.js
*/

/*
input_ex
5 2

output_ex
10
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N, K] = input;

function solution(N, K) {
    let result = 1;
    for (let i = 0; i < K; i++) {
        result *= (N - i);
        result /= (i + 1);
    }
    return Math.round(result);
}

console.log(solution(N, K));