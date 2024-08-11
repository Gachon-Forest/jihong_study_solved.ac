
/*
Date: 8/9
No: 11659
Tier: 실버3
Name: 구간합 4
Language: node.js
*/

/*
input_ex
5 3
5 4 3 2 1
1 3
2 4
5 5

output_ex
12
9
1
*/


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inputPath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(inputPath, "utf-8").trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let resArr = [0];
let total = 0;
for (let i of arr) {
    total += i;
    resArr.push(total);
}

let res = '';
for (let i = 2; i < 2 + M; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    //end까지의 합 - (스타트-1)의인덱스 까지의 합
    res += `${resArr[end] - resArr[start - 1]}\n`;
}

console.log(res);