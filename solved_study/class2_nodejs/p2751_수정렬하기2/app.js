/*
Date: 7/10
No: 2751
Tier: 실버5
Name: 수정렬하기2
Language: node.js
*/

/*
input_ex
5
5
4
3
2
1

output_ex
1
2
3
4
5
*/

let input = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [N, ...numList] = input.map((e) => Number(e));
    const result = numList.sort((a, b) => a - b);
    console.log(result.join('\n'));
  });