// import required modules and packages
const note = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET method for retrieving all the notes in db.json
note.get('/', (req, res) => {
    console.info(`The request ${req.method} for notes has been received`);
    // read from file retrieves all notes and parses them individually
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST method for creating and adding a new note to the note array
note.post('/', (req, res) => {
    console.info(` The ${req.method} has been received`);
    console.log(req.body);

    if (req.body) {
        const addNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        }

        readAndAppend(addNote, './db/db.json');
        res.json('A new note has been created!');
    } else {
        res.error('An error has occurred while adding a new note!');
    }

});

// DELETE method (bonus) for removing a note from the array
note.delete('/:id', (req, res) => {
    let idNote = req.params.id;

    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {

            const noteIndex = json.filter((note) => note.id !== idNote);

            writeToFile('./db/db.json', noteIndex);

            res.json(`The selected ${idNote} has been removed.`);
        });
});

module.exports = note;