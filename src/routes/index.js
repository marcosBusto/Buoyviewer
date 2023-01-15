const router = require('express').Router();
require('../public/models/buoy'); 
require('../public/models/user'); 
const passport = require('passport');

const mongoose = require('mongoose');
const { Router } = require('express');

var ObjectId = mongoose.Types.ObjectId;
Buoy = mongoose.model('Buoy');
User = mongoose.model('users');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/map', (req, res, next) => {
    res.render('map');
});

router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-signup', {
    successRedirect: '/login',
    failureRedirect: '/signin',
    failureFlash: true
  }));

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
  }));

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/analyse', (req, res, next) => {
    res.render('analyse');
});

module.exports = router;