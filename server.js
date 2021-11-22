// import the required modules and packages
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// hosting on heroku port with a default of 3001
const PORT = process.env.PORT || 3001;

// initialize express
const app = express();

// middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route to get API
app.use('/api', api);

// allow access to the public folder
app.use(express.static('public'));

// GET route for the start page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET route for the notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wilcard route which redirects to the start page
app.get('*', (req, res) => res.redirect('/'));

// Listener for the express port
app.listen(PORT, () =>
    console.log(`Application listening at http://localhost:${PORT}`)
);
