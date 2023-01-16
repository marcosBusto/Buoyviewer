//const router = require('express').Router();
require('../models/buoy'); 
require('../models/Users'); 

const mongoose = require('mongoose');
const { Router } = require('express');

var ObjectId = mongoose.Types.ObjectId;
Buoy = mongoose.model('Buoy');
User = mongoose.model('users');

 var express = require('express');
var router = express.Router();
 const passport = require("passport");
// funcion para ver si estamos logeados
function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
}

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/map', (req, res, next) => {
    res.render('map');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/analyse', isLoggedIn, (req, res, next) => {
    res.render('analyse');
});

<<<<<<< HEAD
router.get('/login', (req, res) => {
    res.render('login', {
        message: req.flash('loginMessage')
    });
 });

 router.post('/login', passport.authenticate('local-login', {
     successRedirect: '/',
     failureRedirect: '/login',
     failureFlash: true
 }));

 router.get('/signin', (req, res) => { //por ahora no tenemos view de signup, por lo que no funciona el "get /"
    res.render('signin', {
        message: req.flash('signupMessage')
    });
});

router.post('/signin', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signin', //por ahora no tenemos view de signup, por lo que no funciona el redirect
    failureFlash: true // allow flash messages
}));

router.get('/logout', function(req, res, next){
    req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
    });
});

module.exports = router;
=======
module.exports = router;
>>>>>>> 0208e97538b70c0a9b6b12c4b2c68e79a465cadc
