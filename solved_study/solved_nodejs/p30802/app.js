/*
Date: 7/7
No: 30802
Tier: 브론즈3
Name: 웰컴키트
Language: node.js
*/


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.split(" ").map(Number));

const N = parseInt(input[0]);


const size = input[1].split(' ').map(Number);

const TP = input[2].split(' ').map(Number);



solution(input);

function solution(input){
    let sumT = 0 ;
    let sumP = 0;
    const maxT = N / TP[0] +1;

    for(let i = 0; i < 6; i++){
        for(let j = 1; j <= maxT; j++ ){
            if(input[i] - TP[0] * j <= 0){
                sumT =+ j;
            }
            else{
                continue;
            }
        }
    }

    const result = solution(N, size, TP);
    console.log(result);
}

