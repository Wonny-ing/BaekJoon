const filePath = process.platform === 'linux' ? 0 : './ISak/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map(Number);

console.log(input[0] + input[1]);
