/*
Date: 7/8
No: 1978
Tier: 브론즈2
Name: 소수 찾기
Language: node.js
*/

/*
input_ex
4
1 3 5 7

output_ex
3
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.split(" ").map(Number));

const N = input[0][0];
const sosu = input[1];

function solution(N, sosu){
    let sosu_sum = 0;
    for(let i = 0; i< N ; i++){
        let is_sosu = true;
        for(let j =2; j <= Math.sqrt(sosu[i]); j++){
            if (sosu[i] % j === 0){//나머지가 0이면 나누어떨어진것이기에 소수 아님
                is_sosu = false;
                break;
            }
        }
        if (is_sosu && sosu[i] !== 1) {
            sosu_sum++;
        }
    }
    return sosu_sum;
}

const result = solution(N, sosu);
console.log(result);