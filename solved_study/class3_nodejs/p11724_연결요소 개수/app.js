

/*
Date: 8/10
No: 11724
Tier: 실버2
Name: 연결요소 개수
Language: node.js
*/

/*
6 5
1 2
2 5
5 1
3 4
4 6

output_ex
2
*/

const filePath = process.platform === "linux" ? "dev/stdin" : "../test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const lines = input.map((v) => v.split(" ").map(Number));
  const visited = Array(N + 1).fill(false);
  const graph = Array.from(Array(N + 1)).map(() => []);
  let answer = 0;
  const checkArr = [];

  lines.map(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });

  const bfs = (start) => {
    let queue = [start];
    while (queue.length) {
      const node = queue.shift();
      for (const vertax of graph[node]) {
        if (!visited[vertax]) {
          visited[vertax] = true;
          queue.push(vertax);
        }
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    bfs(i);
    answer++;
  }

  return answer;
}

console.log(solution(input));