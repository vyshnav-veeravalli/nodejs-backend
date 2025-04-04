const fs = require('fs');
const chalk = require('chalk');

const add = (task) => {
    fs.appendFileSync('tasks.txt', `${task}\n`);
    console.log(chalk.green("task added")+task);
};

const list = () => {
    const data = fs.readFileSync('tasks.txt', 'utf-8');
    console.log(chalk.blue("your tasks: "));
    console.log(data);
};

module.exports = { add, list};

