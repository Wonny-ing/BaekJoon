let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  console.log(input[i].trim().split("").reverse().join(""));
}

// 런타임 에러!!!
/* let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
function solution(s) {
  let [n, m] = s[0].split(" ").map(Number);
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(input[i].split("").reverse().join(""));
  }
  return answer.join("\n");
}
console.log(solution(input)); */
