/*
Date: 7/11
No: 11866
Tier: 실버5
Name: 요세푸스
Language: node.js
*/

/*
input_ex
7 3

output_ex
<3, 6, 2, 7, 5, 1, 4>
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [N, K] = input;

function solution(N, K) {
    let circle = Array.from({length: N}, (_, i) => i + 1);//원형으로 배열 생성
    let result = [];
    let index = 0;

    while (circle.length > 0) {
        index = (index + K - 1) % circle.length;//나머지 연산으로 원형으로 돌아오는 과정 구현
        result.push(circle.splice(index, 1)[0]);
    }

    return '<' + result.join(', ') + '>';
}

console.log(solution(N, K));