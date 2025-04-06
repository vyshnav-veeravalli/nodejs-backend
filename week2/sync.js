const fs = require('fs');

console.log("start reading the file ")

const data = fs.readFileSync('sample.txt', 'utf-8');
console.log("completed\n", data);
console.log("completed reading the file in sync")

