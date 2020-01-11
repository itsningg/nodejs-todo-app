const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');

yargs.version('1.0.0');

yargs.command({
    command: 'add',
    describe:'Add new todo. ',
    builder:{
        title:{
            describe:'Title of todo.',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Body of todo.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        const allTodos = fs.readFileSync('todo.json');
        const realAllTodos = JSON.parse(allTodos);
        console.log(realAllTodos);
        const newTodo = {
            title: argv.title,
            body: argv.body
        };
        realAllTodos.push(newTodo);
        const jsonTodo = JSON.stringify(realAllTodos)
        fs.writeFileSync('todo.json',jsonTodo);
        console.log(chalk.green('Added!')+ ' New todo. ');
    }
});

yargs.command({
command: 'list',
describe: 'List all todo. ',
handler(){
    console.log(chalk.yellow.bgBlue('Listing....'))
}
});
const argv = yargs.argv;

