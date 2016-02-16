'use strict';

var timestampHandler = require(process.cwd() + '/app/controllers/timestampHandler.server.js');

module.exports = function (app) {

    app.route('/')
    .get(function (req, res) {
        res.render('index', {
        	appUrl: req.protocol + "://" + req.get('host')
        });
    });

    app.route('/:stringDate').get(timestampHandler);
};
