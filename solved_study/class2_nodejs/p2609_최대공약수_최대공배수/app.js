/*
Date: 7/8
No: 2609
Tier: 브론즈1
Name: 최대공약수와 최소공배수
Language: node.js
*/

/*
input_ex
24 18

output_ex
6
72
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N1, N2] = input;

function gcd(a, b) {//유클리드 알고리즘
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {//최대공약수로 두수의 곱을 나눈값 === 최소공배수
    return (a * b) / gcd(a, b);
}

function solution(N1, N2) {
    const greatestCommonDivisor = gcd(N1, N2);
    const leastCommonMultiple = lcm(N1, N2);
    
    console.log(greatestCommonDivisor);
    console.log(leastCommonMultiple);
}

solution(N1, N2);