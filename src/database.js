const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.connect(mongodb.URI, {useNewUrlParser: true}).then(db => console.log('Database is conected')).catch(err => console.log(err));