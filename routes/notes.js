// import required modules and packages
const { readFromFile, readAndAppend, writeToFile } =  require('../helpers/fsUtils');
const { v4:uuidv4 } = require('uuid');

const note = require('express').Router();

// GET method for retrieving all the notes in db.json
note.get('/', (req, res) => {

})
// POST method for creating and adding a new note to the note array
note.post('/', (req, res) => {
    
})

// DELETE method (bonus) for removing a note from the array
note.delete('/:id', (req, res) => {
    
})