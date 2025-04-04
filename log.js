const fs = require('fs');
const logdata = `Time: ${new Date().toLocaleString()} Message: Math module loaded`;

fs.writeFileSync('log.txt', logdata, { flag: 'a'});
console.log("log update");