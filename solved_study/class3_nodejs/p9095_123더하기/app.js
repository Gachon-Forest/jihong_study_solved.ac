
/*
Date: 8/0
No: 9095
Tier: 실버4
Name: 블랙잭
Language: node.js
*/

/*
3
4
7
10

output_ex
7
44
274
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const memo = new Array(11).fill(0);

const write = (num) => {
  memo[num] = memo[num - 1] + memo[num - 2] + memo[num - 3];
};

// 초기값 설정
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

for (let i = 4; i <= 10; i++) {
  write(i);
}

// 첫 번째 줄(테스트 케이스 수) 제거
input.shift();

// 각 테스트 케이스에 대한 결과 출력
input.forEach((numString) => {
  console.log(memo[Number(numString)]);
});