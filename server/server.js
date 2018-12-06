var createError = require('http-errors');

const express = require('express');

const path = require('path');
const app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');

var mongoose = require('mongoose');

var usersRouter = require('./routes/users');
var audiosRouter = require('./routes/audios');

app.all('', function (req) {
    console.log(req);
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'wQOGue9YoyXjDx@',
    resave: false,
    maxAge: new Date(Date.now() + 3600000),
    expires: new Date(Date.now() + 3600000),
    saveUninitialized: true,
    cookie: {secure: false}
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'build')));

app.use(function (req, res, next) {
    res.locals.login = req.session.login;
    next();
});

app.use('/api/users', usersRouter);
app.use('/api/audios', audiosRouter);


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


app.listen(process.env.PORT || 8080);