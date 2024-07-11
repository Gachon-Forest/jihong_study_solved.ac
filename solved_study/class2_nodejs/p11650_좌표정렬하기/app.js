/*
Date: 7/11
No: 11650
Tier: 실버5
Name: 좌표정렬하기
Language: node.js
*/

/*
input_ex
5
3 4
1 1
1 -1
2 2
3 3

output_ex
1 -1
1 1
2 2
3 3
3 4
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const coordinates = [];

for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    coordinates.push([x, y]);
}

coordinates.sort((a, b) => {
    if (a[0] !== b[0]) {
        return a[0] - b[0];  // x 좌표로 오름차순 정렬
    }
    return a[1] - b[1];  // x 좌표가 같으면 y 좌표로 오름차순 정렬
});

let result = '';
for (let i = 0; i < N; i++) {
    result += `${coordinates[i][0]} ${coordinates[i][1]}\n`;
}

console.log(result.trim());