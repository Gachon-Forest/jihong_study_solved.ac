

/*
Date: 8/11
No: 2630
Tier: 실버2
Name: 색종이
Language: node.js
*/

/*
input_ex
8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1
output_ex
9
7
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const paper = input.slice(1).map(row => row.split(' ').map(Number));

let whiteCount = 0;
let blueCount = 0;

function countColoredPaper(x, y, size) {
    const color = paper[x][y];
    const isUniform = paper.slice(x, x + size).every(row => 
        row.slice(y, y + size).every(cell => cell === color)
    );

    if (isUniform) {
        color === 0 ? whiteCount++ : blueCount++;
    } else {
        const newSize = size / 2;
        countColoredPaper(x, y, newSize);
        countColoredPaper(x, y + newSize, newSize);
        countColoredPaper(x + newSize, y, newSize);
        countColoredPaper(x + newSize, y + newSize, newSize);
    }
}

countColoredPaper(0, 0, n);
console.log(whiteCount);
console.log(blueCount);