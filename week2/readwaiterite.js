const fs = require('fs').promises;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const processFile = async () => {
    try {
        console.log("reading file");
        const data = await fs.readFile('sample.txt', 'utf-8');
        console.log("the file contains: ", data);

        console.log("waiting for 2 seconds");
        await delay(2000);

        console.log("writing to new file")
        await fs.writeFile('sample.txt', data.toUpperCase());
        console.log("writing done");
    }
    catch(error){
        console.log("the error is: ", error);
    }
};

processFile();