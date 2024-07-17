
/*
Date: 7/16
No: 10816
Tier: 실버4
Name: 숫자카드2 
Language: node.js
*/

/*
input_ex
10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10

output_ex
3 0 0 1 2 0 0 2
*/


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const Aarr = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const Qarr = input[3].split(' ').map(Number);

function solution(N, Aarr, M, Qarr) {
    const countMap = new Map();
    
    // Aarr의 각 숫자의 출현 횟수를 계산
    for (let num of Aarr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    // Qarr의 각 숫자에 대해 출현 횟수를 찾아 결과 배열에 저장
    const result = Qarr.map(num => countMap.get(num) || 0);
    
    // 결과를 공백으로 구분하여 출력
    console.log(result.join(' '));
}

solution(N, Aarr, M, Qarr);