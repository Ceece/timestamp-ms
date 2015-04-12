var express = require ('express'),
	app = express(),
	commentCtrlr = require(process.cwd() + '/app/controllers/commentCtrlr.server.js');

module.exports = function (app) {
	//Index route
	app.route('/')
		.get(function (req, res) {
			res.render('index');
		});

	//API routes
	app.route('/api/comments')
		.get(commentCtrlr.list)
		.post(commentCtrlr.create);

	//Exception handling for unspecified routes
	app.route('*')
		.get(function (req, res) {
			res.status(404);
			res.send('Page not found.');
		});
};