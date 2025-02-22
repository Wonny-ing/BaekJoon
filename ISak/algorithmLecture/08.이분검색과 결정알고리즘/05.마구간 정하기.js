// 강사님 코드
function count(stable, dist) {
  let cnt = 1,
    ep = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

function solution(stables, c) {
  let answer;
  stables.sort((a, b) => a - b);
  stables;
  let lt = 1;
  let rt = stables[stables.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    mid;
    if (count(stables, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
}

console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8));
