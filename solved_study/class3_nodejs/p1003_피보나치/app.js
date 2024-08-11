

/*
Date: 8/9
No: 103
Tier: 실버3
Name: 피보나치
Language: node.js
*/

/*
input_ex
3
0
1
3

output_ex
1 0
0 1
1 2
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const len = input.shift();

for (let i = 0; i < len; i++) {
    const n = input[i];

    //0일때 0개수 1개수 | 1일때 0개수 1개수
    const fibonacci = [[1, 0], [0, 1]];
    
    for (let j = 2; j <= n; j++) {
        fibonacci[j] = [
            //0개수 1개수 따로따로 더함
            fibonacci[j-1][0] + fibonacci[j-2][0], 
            fibonacci[j-1][1] + fibonacci[j-2][1]
        ];
    }

    console.log(fibonacci[n].join(" "));
}