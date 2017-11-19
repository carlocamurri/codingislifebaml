var router = require('express').Router();
var bodyParser = require('body-parser');
var yahooFinance = require('yahoo-finance');

router.post('/get_quotes', function(req, res) {
	console.log(req.body);
	yahooFinance.historical({
	  	symbol : req.body.search_symbol,
	  	from : "2016-1-1",
	  	to : "2017-11-19",
	  	period : "w",  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
	}, function (err, quotes) {
	  	res.send(quotes);
	});
});


module.exports = router;
