/*
Date: 8/9
No: 1927
Tier: 실버2
Name: 최소힙
Language: node.js
*/

/*
input_ex
9
0
12345678
1
2
0
0
0
0
32

output_ex
0
1
2
12345678
0
*/
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0], 10);
const operations = input.slice(1).map(Number);

let heap = [];

// 힙에 값 추가
function insert(value) {
    heap.push(value);
    heapifyUp(heap.length - 1);
}

// 힙에서 최소값 추출
function extractMin() {
    if (heap.length === 0) {
        return 0;
    }
    if (heap.length === 1) {
        return heap.pop();
    }
    const min = heap[0];
    heap[0] = heap.pop();
    heapifyDown(0);
    return min;
}

// 힙을 위로 정렬
function heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (heap[currentIndex] < heap[parentIndex]) {
            [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]];
            currentIndex = parentIndex;
        } else {
            break;
        }
    }
}

// 힙을 아래로 정렬
function heapifyDown(index) {
    let currentIndex = index;
    const length = heap.length;
    while (true) {
        const leftIndex = 2 * currentIndex + 1;
        const rightIndex = 2 * currentIndex + 2;
        let smallestIndex = currentIndex;

        if (leftIndex < length && heap[leftIndex] < heap[smallestIndex]) {
            smallestIndex = leftIndex;
        }

        if (rightIndex < length && heap[rightIndex] < heap[smallestIndex]) {
            smallestIndex = rightIndex;
        }

        if (smallestIndex !== currentIndex) {
            [heap[currentIndex], heap[smallestIndex]] = [heap[smallestIndex], heap[currentIndex]];
            currentIndex = smallestIndex;
        } else {
            break;
        }
    }
}

const results = [];

for (let i = 0; i < N; i++) {
    const op = operations[i];
    if (op === 0) {
        results.push(extractMin());
    } else {
        insert(op);
    }
}

console.log(results.join('\n'));