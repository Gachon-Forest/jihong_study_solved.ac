
/*
Date: 7/10
No: 1181
Tier: 실버5
Name: 단어정렬
Language: node.js
*/

/*
input_ex
13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours

output_ex
i
im
it
no
but
more
wait
wont
yours
cannot
hesitate
*/


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const words = input.slice(1);

function sortByLength(words) {
    return words.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });
}

function removeDuplicates(words) {
    return [...new Set(words)];
}

function sortAndPrint(words) {
    const uniqueWords = removeDuplicates(words);
    const sortedWords = sortByLength(uniqueWords);
    sortedWords.forEach(word => console.log(word));
}

sortAndPrint(words);