
/*
Date: 7/10
No: 1018
Tier: 실버4
Name: 체스판다시칠하기
Language: node.js
*/

/*
input ex
8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW

output_ex
1
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const board = input.slice(1).map(row => row.split('').map(cell => cell === 'W' ? 1 : 0));

let minCount = 64;  // 최대 변경 횟수는 8x8=64
for (let x = 0; x <= a - 8; x++) {
  for (let y = 0; y <= b - 8; y++) {
    let count1 = 0;
    let count2 = 0;
    
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (((i + j) & 1) !== board[x + i][y + j]) {
          count1++;
        } else {
          count2++;
        }
      }
    }
    
    minCount = Math.min(minCount, count1, count2);
  }
}

console.log(minCount);