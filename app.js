const yargs = require('yargs');
const todo = require('./todo.js');

yargs.command({
    command: 'add',
    describe: 'add a new task',
    builder: {
        task: {
            describe: 'task to add',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        todo.add(argv.task);
    }
});

yargs.command({
    command: 'list',
    describe: 'list out the tasks',
    handler(){
        todo.list();
    }
})

yargs.parse();