const os = require('os');

console.log("os arch: ", os.arch());
console.log("os platform: ", os.platform());            
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Home Directory:", os.homedir());
console.log("Uptime (seconds):", os.uptime()/3600);