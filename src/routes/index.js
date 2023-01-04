const router = require('express').Router();
require('../public/models/buoy'); 

const mongoose = require('mongoose');
const { Router } = require('express');

var ObjectId = mongoose.Types.ObjectId;
Buoy = mongoose.model('Buoy');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/map', (req, res, next) => {
    res.render('map');
});

router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/analyse', (req, res, next) => {
    res.render('analyse');
});

module.exports = router;