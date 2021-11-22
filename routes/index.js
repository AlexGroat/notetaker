// import required modules and packages
const express = require('express');
const routeForNotes = require('./notes');

const app = express();

app.use('/notes', routeForNotes);

module.exports = app;
