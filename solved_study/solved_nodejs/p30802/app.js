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

const N = input[0][0];
const size = input[1];
const TP = input[2];

function solution_T(N, size, TP) {
    let sumT = 0;
    const [T, P] = TP;
    const maxT = Math.max(...size);

    for (let i = 0; i < 6; i++) {
        for (let j = 1; j <= maxT; j++) {
            if (size[i] - T * j <= 0) {
                sumT += j;
                break;
            }
        }
    }
    return sumT;
}

const result_T = solution_T(N, size, TP);

function solution_P(N, TP){
    let bundle_P =0;
    let extra_P = 0;
    const [T, P] = TP;
    bundle_P = Math.floor(N / P);
    extra_P = N % P;

    return [ bundle_P , extra_P ];
}

const [result_P_bundle , result_P_extra] = solution_P(N, TP);

console.log(result_T);
console.log(result_P_bundle , result_P_extra);