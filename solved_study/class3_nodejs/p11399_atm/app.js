

/*
Date: 8/10
No: 11399
Tier: 실버4
Name: atm
Language: node.js
*/

/*
input_ex
5
3 1 4 3 2
output_ex
32
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

function solution(n, arr) {
  // 우선 업무처리시간이 짧은 순으로 오름차순 정렬한다.
  arr.sort((a, b) => a - b);
  
  let tempSum = 0;
   
  let sum = 0;
  
  for (let i = 0; i < n; i++) {
    sum += tempSum + arr[i];
    tempSum += arr[i];
  }
  
  return sum;
}

console.log(solution(n, arr));