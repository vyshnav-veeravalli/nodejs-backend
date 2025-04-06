const fs = require('fs').promises;

const readFile = async () => {
    try {
        const data = await fs.readFile('sample.txt', 'utf-8');
        console.log(data);
    }
    catch (error) {
        console.log("the error is: ", error);
    }
};

readFile();