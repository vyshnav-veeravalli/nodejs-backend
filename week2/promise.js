const fs = require('fs');

const readFilePromise = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err){
                reject("failed to read the file")
            }
            else{
                resolve(data);
            }
        });
    });
};

readFilePromise('sample.txt')
    .then((data) => {
        console.log("file conatins: ", data);
    })
    .catch((error) => {
        console.log("Promise rejected: ", error);

    });
