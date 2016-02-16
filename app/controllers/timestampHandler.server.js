'use strict';

var moment = require('moment').utc;

function timestampHandler(req, res)  {
	var stringDate = req.params.stringDate;
	if ((stringDate + '').match(/\d{10}/)) {
		var date = moment(stringDate * 1000);
		jsonDate(res, date);
	} else if (stringDate.match(/\w+\s\d+\,\s\d{4}/)) {
		var date = moment(stringDate, 'MMMM D, YYYY');
		jsonDate(res, date);
	} else {
		res.json(null);
	}
}

function jsonDate(res, date) {
	res.json({
		"unix": date.format('x') / 1000,
		"natural": date.format('MMMM D, YYYY')
	});
}

module.exports = timestampHandler;