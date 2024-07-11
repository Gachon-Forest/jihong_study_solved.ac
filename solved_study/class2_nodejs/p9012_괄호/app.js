
/*
Date: 7/12
No: 9012
Tier: 실버4
Name: 괄호
Language: node.js
*/

/*
input_ex
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(

output_ex
NO
NO
YES
NO
YES
NO
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const words = input.slice(1);

function isVPS(str) {
    let stack = [];
    for (let char of str) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return "NO";
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? "YES" : "NO";
}

function findVPS(N, words) {
    for (let i = 0; i < N; i++) {
        console.log(isVPS(words[i]));
    }
}

findVPS(N, words);