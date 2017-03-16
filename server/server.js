var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
require('./routes.js')(app);

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port:', port);
