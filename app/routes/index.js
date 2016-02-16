'use strict';

var timestampHandler = require(process.cwd() + '/app/controllers/timestampHandler.server.js');

module.exports = function (app) {

    app.route('/')
    .get(function (req, res) {
        // res.sendFile(process.cwd() + '/public/index.html');
        res.render('index')
    });

    app.route('/:stringDate').get(timestampHandler);
};
