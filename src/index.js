const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');

//initializations
const app = express();
require('./database')

//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.set('views', '')

// routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting server
app.listen(3000, () => {
    console.log('server on port 3000');
});