const fs = require('fs');

console.log("start reading the file in asyncronus");

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("error ochindhi ", err);
    }

    console.log("file content is", data);
});

console.log("completed reading the file in asyncronus");
// console.log("completed reading the file in asyncronus"); 