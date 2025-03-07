function solution(nums) {
  let peak = [];
  let len = 1;
  let len_list = [];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) peak.push(i);
  }
  for (let p of peak) {
    let left = p;
    let right = p;
    while (nums[left - 1] < nums[left]) {
      left--;
      len++;
    }
    while (nums[right + 1] < nums[right]) {
      right++;
      len++;
    }
    len_list.push(len);
    len = 1;
  }
  return Math.max(...len_list);
}
nums = [1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(solution(nums));
