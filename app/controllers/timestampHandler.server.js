'use strict';

var moment = require('moment').utc;

function timestampHandler(req, res)  {
	var stringDate = req.params.stringDate;
	if ((stringDate + '').match(/\d{10}/))
		stringDate *= 1000;
	var date = moment(stringDate);
	res.json({
		"unix": date.format('x') / 1000,
		"natural": date.format('MMMM D, YYYY')
	});
}

module.exports = timestampHandler;