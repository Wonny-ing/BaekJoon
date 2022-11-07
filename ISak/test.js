function solution(n) {
  let answer = 0,
    sum = 0;
  let m = parseInt(n / 2) + 1;
  let nums = Array.from({ length: m }, (v, i) => i + 1);
  console.log(nums);
  let lt = 0;
  for (let rt = 0; rt < m; rt++) {
    sum += nums[rt];
    while (sum > n) {
      sum -= nums[lt++];
    }
    if (sum === n) answer++;
  }
  return answer;
}
console.log(solution(98765));
