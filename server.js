'use strict';

var express = require('express');
var mongo = require('mongodb');
var routes = require('./app/routes/index.js');

var app = express();

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

app.set('view engine', 'jade');

routes(app);

app.listen(3000, function () {
   console.log('Node.js listening on port 3000...');
});