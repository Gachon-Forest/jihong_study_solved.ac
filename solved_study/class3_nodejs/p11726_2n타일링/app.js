
/*
Date: 8/9
No: 11726
Tier: 실버3
Name: 2n타일링
Language: node.js
*/

/*
2

output_ex
2
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());

const memo = {
    1: 1,
    2: 2
};

for (let i = 3; i <= input; i++) {
    memo[i] = (memo[i-1] + memo[i-2]) % 10007;
}

console.log(memo[input]);