const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const A = BigInt(input[0])
const B = BigInt(input[1])
console.log((A + B).toString())