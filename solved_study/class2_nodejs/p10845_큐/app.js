/*
Date: 7/13
No: 10845
Tier: 실버4
Name: 큐
Language: node.js
*/

/*
input_ex
15
push 1
push 2
front
back
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
front
output_ex
1
2
2
0
1
2
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

function queueSolution(commands) {
    let queue = [];
    let result = [];

    for (let command of commands) {
        const [operation, value] = command.split(' ');
        
        switch (operation) {
            case 'push':
                queue.push(parseInt(value));
                break;
            case 'pop':
                result.push(queue.length === 0 ? -1 : queue.shift());
                break;
            case 'empty':
                result.push(queue.length === 0 ? 1 : 0);
                break;
            case 'size':
                result.push(queue.length);
                break;
            case 'front':
                result.push(queue.length === 0 ? -1 : queue[0]);
                break;
            case 'back':
                result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
                break;
        }
    }

    return result.join('\n');
}


const output = queueSolution(commands);
console.log(output);
