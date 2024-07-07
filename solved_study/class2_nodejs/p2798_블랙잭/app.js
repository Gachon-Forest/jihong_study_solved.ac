
/*
Date: 7/8
No: 2798
Tier: 브론즈2
Name: 블랙잭
Language: node.js
*/

/*
input_ex
5 21
5 6 7 8 9

output_ex
21
*/


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);



function solution(N ,M,  nums)
{
    let blackJack = 0;

    for(let i =0; i < N-2; i++){
        for(let j =i+1; j<N-1; j++){
            for(let k =j+1 ; k<N; k++){
                const sum =nums[i]+nums[j]+nums[k];
                if(sum > blackJack && sum <= M){
                    blackJack = sum;
                }
            }
        }
    }
    console.log(blackJack);
}

solution(N, M, nums);

