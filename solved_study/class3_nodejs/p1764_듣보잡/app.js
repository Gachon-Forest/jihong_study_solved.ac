
/*
Date: 7/23
No: 1764
Tier: 실버4
Name: 블랙잭
Language: node.js
*/

/*
input_ex
3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton

output_ex
2
baesangwook
ohhenrie
*/


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const notHeard = new Set(input.slice(1, N + 1));
const notSeen = new Set(input.slice(N + 1));

function solution(notHeard, notSeen) {
    const result = [...notHeard].filter(name => notSeen.has(name));
    return result.sort();
}

const answer = solution(notHeard, notSeen);
console.log(answer.length);
console.log(answer.join('\n'));