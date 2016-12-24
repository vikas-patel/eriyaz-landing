var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var path = require('path');

app.use(express.static(path.join(__dirname, 'views')))
/*
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
*/
var server = app.listen(port, function() {
	console.log('App listening at http://%s:%s', server.address().address, server.address().port);
});