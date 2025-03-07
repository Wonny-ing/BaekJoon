// https://www.acmicpc.net/problem/2061
const filePath = process.platform === 'linux' ? 0 : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(BigInt);
const [K, L] = [input[0], input[1]];
let flag = true;
for (let i = 2n; i < L; i++) {
  if (K % i === 0n) {
    console.log(`BAD ${i}`);
    flag = false;
    break;
  }
}
if (flag) console.log('GOOD');
