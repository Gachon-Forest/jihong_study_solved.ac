/*
Date: 7/8
No: 1259
Tier: 브론즈1
Name: 팰린드롬수
Language: node.js
*/

/*
input_ex
121
1231
12421
0

output_ex
yes
no
yes
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solution(nums){
    for (const num of nums) {
        if (num === 0) {
            break;
        }
        
        let str = num.toString();
        let isPalindrome = true;
        
        for (let i = 0; i < Math.floor(str.length / 2); i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        
        console.log(isPalindrome ? "yes" : "no");
    }
}

solution(input);