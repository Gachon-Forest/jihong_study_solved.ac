/*
Date: 7/7
No: 4153
Tier: 브론즈3
Name: 직각삼각형
Language: node.js
*/


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.split(" ").map(Number));

solution(input);

function solution(input) {
    for(let i = 0; i < input.length; i++){
        const [a, b, c] = input[i].sort((x, y) => x - y);
        
        if(a === 0 && b === 0 && c === 0){
            break;
        }
        
        if(a*a + b*b === c*c){
            console.log("right");
        } else {
            console.log("wrong");
        }
    }
}