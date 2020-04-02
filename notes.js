const fs = require('fs');
const chalk = require('chalk')
const getNotes = function(){
    return "Your notes..."
}

const addNote = (title,body)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.find(note=>note.title === title);

    debugger;
    
    if(!duplicateNotes){
        notes.push({
            title : title,
            body : body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("Note added!"));
    }
    else{
        console.log(chalk.red.inverse("Note title taken!!"));
    }
}

const loadNotes = ()=>{
    try{
        const BufferData = fs.readFileSync('notes.json');
        const dataJSON = BufferData.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const removeNode = (title)=>{
     const notes = loadNotes();
     const filteredNote = notes.filter(note=>note.title !== title)

     if(filteredNote.length < notes.length){
        saveNotes(filteredNote);
        console.log(chalk.green.inverse("Note removed!"));
     }
     else{
         console.log(chalk.red.inverse("Note was not found!"));
     }
}

const listNote = ()=>{
    const notes = loadNotes();
    console.log(chalk.blue.inverse("You have Notes :"));
    notes.forEach(element => {
        console.log(chalk.white(element.title+": "+element.body));
    });
}

const readList = (title)=>{
    const notes = loadNotes();
    const note = notes.find(note=>note.title === title);
    if(note){
        console.log(chalk.green.bold.italic(note.title ) +" : "+ chalk.white.dim.italic(note.body) )
        console.log()
    }
    else{
        console.log(chalk.red.inverse("Note Not Found.!!"))
    }

}

module.exports =  {
    getNotes : getNotes,
    addNote : addNote,
    removeNode : removeNode,
    listNote : listNote,
    readList : readList
}