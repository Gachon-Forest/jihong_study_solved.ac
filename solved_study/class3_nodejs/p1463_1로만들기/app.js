

/*
Date: 8/9
No: 1463
Tier: 실버3
Name: 1로만들기
Language: node.js
*/

/*
input_ex
2

output_ex
1
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let dp = Array(N+1).fill(1e6+1);

dp[1] = 0;
for(let i = 2; i <= N; i++) {
    //-1연산
    dp[i] = dp[i-1];
    if(i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[Math.floor(i/3)]);
    }
    if(i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[Math.floor(i/2)]);
    }
    //2 3으로 안나눠질때 -1만 했을때 횟수
    dp[i]++;
}

console.log(dp[N]);