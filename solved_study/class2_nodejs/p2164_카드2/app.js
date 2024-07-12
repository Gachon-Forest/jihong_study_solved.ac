/*
Date: 7/12  
No: 2164
Tier: 실버4
Name: 카드2
Language: node.js
*/

/*
input_ex
6

output_ex
4
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);


function solution(N){
    let circle = Array.from({length: N}, (_, i) => i + 1);//원형으로 배열 생성
    let result = [];
    let index = 0;

    while (circle.length > 0) {
        index = (index + 1) % circle.length;//나머지 연산으로 원형으로 돌아오는 과정 구현 / index +1 == 2만큼 점프
        result.pop(circle.splice(index, 1)[0]);//원형배열을 2칸씩 건너뛰어가며 팝
        if(circle.length === 1){
            console.log(circle[0]);//하나 남았을때 마지막으로 남은 하나 출력
            break;
        }
    }
}
solution(N);

//정답코드
/*
const fs = require("fs");
// 백준 제출 할 때 주석 제거
// const readFileSyncAddress = '/dev/stdin';
// VSC 테스트 할 때 주석 제거
const readFileSyncAddress = "/dev/stdin";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// 문제 풀이
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this._size++;

        return newNode;
    }

    getHead() {
        return this.head.value;
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
    }

    getSize() {
        return this._size;
    }
}

function solution(input) {
    const cards = new LinkedList();
    for (let i = 1; i <= input; i++) {
        cards.add(i);
    }

    while (cards.getSize() !== 1) {
        cards.removeHead();
        cards.add(cards.getHead());
        cards.removeHead();
    }

    return cards.getHead();
}

input = Number(input[0]);
const card = solution(input);
console.log(card);
*/