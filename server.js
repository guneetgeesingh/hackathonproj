var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require("compression");

var seed = require('./routes/seed');

var mentors = require('./routes/mentors');

var app = express();
app.use(compression());

//load env variables
require('dotenv').load()

//connect to Mongodb with mongoose
require('./config/database')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/seed', seed)
app.use('/api/mentors', mentors)


module.exports = app;
