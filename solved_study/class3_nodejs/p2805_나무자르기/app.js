/*
Date: 8/10
No: 2805
Tier: 실버2
Name: 나무자르기
Language: node.js
*/

/*
input_ex
4 7
20 15 10 17

output_ex
15
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(el => parseInt(el));
const arr = input[1].split(' ').map(el => parseInt(el)).sort((a, b) => a - b);
let result = 0;
let min = 0;
let max = arr[n - 1];

while(min <= max){
    let mid = Math.floor((max + min) / 2);
    let sum = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] - mid > 0){
            sum += arr[i] - mid;
        }
    }

    if(sum >= m){
        min = mid + 1;    
    } else{
        max = mid - 1;
    }
    result = max;
}

console.log(result);