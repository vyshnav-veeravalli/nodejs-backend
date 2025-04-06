const fs = require('fs');

fs.writeFile('sample.txt', 'i really miss my baby', (err) => {
    if(!err){
        fs.appendFile('sample.txt', '\nshe is such a fairy', (err) => {
            if(!err){
                fs.readFile('sample.txt', 'utf-8', (err, data) => {
                    if(!err){
                        console.log("file content: ", data);
                    }
                })
            }
        })
    }
})

fs.unlink('sample.txt', (err) => {
    if(!err){
        console.log("file deleted successfully");
    }
})

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("we had an error: ", err);
    }
    console.log("the file contains: ", data);
})