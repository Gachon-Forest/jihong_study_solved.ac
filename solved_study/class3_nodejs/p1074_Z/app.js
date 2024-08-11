
/*
Date: 8/11
No: 1074
Tier: 실버1
Name: Z
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
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const [N, r, c] = input.map(Number);

function findZ(n, r, c) {
    if (n === 0) return 0;
    
    const half = 1 << (n - 1);
    const quadrant = (r < half ? 0 : 2) + (c < half ? 0 : 1);
    
    const newR = r % half;
    const newC = c % half;
    
    return (half * half * quadrant) + findZ(n - 1, newR, newC);
}

console.log(findZ(N, r, c));