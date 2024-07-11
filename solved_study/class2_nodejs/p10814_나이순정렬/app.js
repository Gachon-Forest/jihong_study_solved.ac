
/*
Date: 7/11
No: 10814
Tier: 실버5
Name: 나이순정렬
Language: node.js
*/
/*
input_ex
3
21 Junkyu
21 Dohyun
20 Sunyoung

output_ex
20 Sunyoung
21 Junkyu
21 Dohyun
*/



const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.split(" ").map(Number));

const N = parseInt(input[0]); // 학생 수
const students = [];

for (let i = 1; i <= N; i++) {
    const [age, name] = input[i].split(' ');
    students.push({
        age: parseInt(age),
        name: name
    });
}


function solution(N,students){
    students.sort((a,b)=>a.age-b.age);
    students.forEach(student => {
        console.log(`${student.age} ${student.name}`);
    });
}

solution(N,students);