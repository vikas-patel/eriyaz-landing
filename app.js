var express = require("express");
var app = express();
var port = process.env.PORT || 3001;
var router = express.Router();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, 'views')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); // get information from html forms

router.post("/subscribe",function(req,res){
  console.log(req.body);
  request.post(
		// Google Form: eRiyaz email subscription list
		'https://docs.google.com/forms/d/1TxAR8sIKykkmJzOWssqhyjjPQ7jQPx6ZfFBAGjgrCuk/formResponse',
		{form:req.body},
		function (error, response, body) {
			
			if (!error && response.statusCode == 200) {
				var json_resp = {"info":"Subscribed successfully."};
				res.json(json_resp);
			} else {
				var json_resp = {};
				res.statusCode = 400;
				res.json(json_resp);
			}
		}
	);
});
/*
router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});
*/
app.use("/",router);

var server = app.listen(port, function() {
	console.log('App listening at http://%s:%s', server.address().address, server.address().port);
});