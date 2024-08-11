

/*
Date: 8/11
No: 18870
Tier: 실버2
Name: 좌표압축
Language: node.js
*/

/*
input_ex
5
2 4 -10 4 -9
output_ex
2 3 0 3 1
*/
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, xString] = input;
const x = xString.split(' ').map(i => Number(i));

const answer = [];
//중복제거 로직
const uniqueSortedX = Array.from(new Set([...x])).sort((a, b) => a - b);

const compressionMap = {};
uniqueSortedX.forEach((item, idx) => {
    compressionMap[item] = idx;
});

for (let i = 0; i < x.length; i++) {
    answer.push(compressionMap[x[i]]);
}

console.log(answer.join(' '));