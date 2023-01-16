// const express = require('express');
// const engine = require('ejs-mate');
// const path = require('path');
// const mongoose = require('mongoose');

// //initializations
// const app = express();
// require('./database');

// //settings
// app.engine('ejs', engine);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// //app.set('views', '')

// // routes
// app.use(require('./routes/index'));
// //static files
// app.use(express.static(path.join(__dirname, 'public')));

// //configuracion del passport
// var flash = require('connect-flash'); //p
// const passport = require("./passport/setup"); //p
// const session = require("express-session");  //p
// app.use(   
//     session({
//         secret: "very secret this is",
//         resave: false,
//         saveUninitialized: true,
//         store: new MongoStore({ mongooseConnection: mongoose.connection })
//     })
// );

// // Passport middleware
// app.use(passport.initialize()); 
// app.use(passport.session()); 
// app.use(flash());

// //starting server
// app.listen(3000, () => {
//     console.log('server on port 3000');
// });
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var flash = require('connect-flash'); //p
const passport = require("./passport/setup"); //p
const session = require("express-session");  //p
const MongoStore = require("connect-mongo")(session); //p

var indexRouter = require('./routes/index');

var app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/Users';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Express Session
app.use(   
  session({
      secret: "very secret this is",
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Passport middleware
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(flash()); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

 app.listen(3000, () => {
console.log('server on port 3000');
 });

//starting server
app.listen(3000, () => {
    console.log('server on port 3000');
});
