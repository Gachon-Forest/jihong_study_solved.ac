

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);

const graph = input.slice(1).map(line => line.split(' '));

// 각 칸까지의 거리를 저장할 배열, -1로 초기화
const answer = Array.from({ length: n }, () => Array(m).fill(-1));
// 방문 여부를 체크할 배열
const visit = Array.from({ length: n }, () => Array(m).fill(false));

let tr, tc; // 시작점의 좌표
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (graph[i][j] === '0') {
            answer[i][j] = 0; // 벽은 거리를 0으로 설정
        } else if (graph[i][j] === '2') {
            [tr, tc] = [i, j]; // 시작점 좌표 저장
        }
    }
}

// BFS를 위한 큐, 시작점을 넣고 초기화
const q = [[tr, tc, 0]];
answer[tr][tc] = 0; // 시작점의 거리는 0

// 상하좌우 이동을 위한 방향 배열
const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

while (q.length > 0) {
    const [cr, cc, cnt] = q.shift(); 
    if (!visit[cr][cc]) {
        visit[cr][cc] = true; 
        for (let d = 0; d < 4; d++) { // 4방향 탐색
            const nr = cr + dx[d];
            const nc = cc + dy[d];
        
            if (0 <= nr && nr < n && 0 <= nc && nc < m && !visit[nr][nc]) {
                if (graph[nr][nc] === '1') { // 갈 수 있는 길이면
                    answer[nr][nc] = cnt + 1; // 거리 갱신
                    q.push([nr, nc, cnt + 1]); // 큐에 추가
                }
            }
        }
    }
}

// 결과 출력
for (let i = 0; i < n; i++) {
    console.log(answer[i].join(' '));
}