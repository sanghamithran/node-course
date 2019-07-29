const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();

    debugger
   // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"));
    }else{
        console.log(chalk.red.inverse("Note title taken"));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep  = notes.filter((note)=> note.title !== title);

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Note Removed"));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse("No Note found"));
    }



}

const saveNotes = (notes) => {
     const dataJSON = JSON.stringify(notes);
     fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e){
        return [];
    }
}

const listNotes = () =>{
    const notes = loadNotes();
    if(notes.length === 0){
        console.log(chalk.red("No notes found"));
    }else{
        console.log(chalk.inverse("Your Notes:"));
        notes.forEach(note => {
            console.log(note.title);
        });
    }

}

const readNote = (title)=>{
    const notes = loadNotes();
    const note = notes.find((note)=> note.title === title)
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse("Note not found"));
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};