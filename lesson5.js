console.log("all argument: ", process.argv);
console.log("custom arguments: ", process.argv[2]);

console.log("enviornment varialble: ", process.env.MY_SECRET);
console.log("platform: ", process.platform);
console.log("memory usage", process.memoryUsage());
console.log("node version: ", process.version);