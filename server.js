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


app.listen(PORT, () =>  console.log(`This application is listening on server${PORT}`));
