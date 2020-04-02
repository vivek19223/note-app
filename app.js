const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs'); 

//Create add command
yargs.command({
    command: 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note Title.',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type : "string"
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
});

//Remove command node
yargs.command({
    command: 'remove',
    describe : 'Remove a new note',
    builder : {
        title : {
            describe : "Title to be removed",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNode(argv.title);
    }
})

//List command node
yargs.command({
    command: 'read',
    describe : 'Read a note',
    builder : {
        title : {
            describe : "Read a Note",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readList(argv.title);
    }
})

//Remove command node
yargs.command({
    command: 'list',
    describe : 'List all note',
    handler(){
        notes.listNote();
    }
})

yargs.parse();