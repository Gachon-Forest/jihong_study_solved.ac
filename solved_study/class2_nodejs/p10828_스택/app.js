/*
Date: 7/12
No: 10828
Tier: 실버4
Name: 스택
Language: node.js
*/

/*
input_ex
14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top

output_ex
2
2
0
2
1
-1
0
1
-1
0
3
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const commands = input.slice(1);

function stackSolution(commands) {
    let stack = [];
    let result = [];

    for (let command of commands) {
        const [operation, value] = command.split(' ');
        
        switch (operation) {
            case 'push':
                stack.push(parseInt(value));
                break;
            case 'pop':
                result.push(stack.length === 0 ? -1 : stack.pop());
                break;
            case 'empty':
                result.push(stack.length === 0 ? 1 : 0);
                break;
            case 'top':
                result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
                break;
        }
    }

    return result.join('\n');
}

console.log(stackSolution(commands));