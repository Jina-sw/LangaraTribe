var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const User = require('./Models/user');

var app = express();
//connect to mongo db

const mongoose = require('mongoose');

const dbURL = "mongodb+srv://jaylee98:K6z1nqUKc7YnU8EG@cluster0.y7pnsnz.mongodb.net/cluster0?retryWrites=true&w=majority";
mongoose.connect(dbURL)
  .then((result) => app.listen(3500))
  .catch((err) => console.log(err));

const db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/user', function (req, res) {
  User.find({}, function (err,users){
    if(err){
      res.send(err)
    }else{
      res.json(users);
    }
  });
});



module.exports = app;
