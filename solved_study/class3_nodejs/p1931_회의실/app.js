
/*
Date: 8/10
No: 1931
Tier: 실버1
Name: 회의실
Language: node.js
*/

/*
input_ex
11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14

output_ex
4
*/

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...arr] = input;
let answer = 0;
const times = arr
  .map((num) => num.split(' ').map((num) => +num))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let et = 0;
times.forEach((time) => {
  if (time[0] >= et) {
    answer++;
    et = time[1];
  }
});

console.log(answer);