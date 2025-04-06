const fs = require('fs');

const greet = (name, callback) => {
    console.log("hi ra",name);
    callback();
};

greet("vyshnav", () => {
    console.log("callback function is called");
});

fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("we had an erro: ", err);
    }
    console.log("the file contains: ", data);
})