const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String
});

module.exports = mongoose.model('users', userSchema);