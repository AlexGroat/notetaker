// import modules and packages
const express = require('express');
const path = require('path');
const api = require('./routes/index');

// port for heroku 
const PORT = process.env.PORT || 3001;

const app = express();


// middleware here
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('./api', api);

// access to all contents in public folder
app.use(express.static('public'))

// GET method route for homepage
app.get('/', (req, res) =>
 res.sendFile(path.join(__dirname, './public/index.html'))
 );

 // GET method route for notes
 app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// wildcard method route which will redirect back to the index.html
app.get('*', (req, res) => res.redirect('/'));


app.listen(PORT, () =>  console.log(`This application is listening on server${PORT}`));
