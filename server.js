const express = require('express'); //express, what else?
const bodyParser = require('body-parser'); //to parse requests body
const request = require('request'); //http client
const fs = require('fs');//Filesystem, handles rw files
var app = express();
var path = __dirname + '/views/' ;
app.use(express.static(__dirname + '/public'));
app.get("/",function(req,res,next){
	res.sendFile(path + "index.html");
});

app.get("/api", function(req,res,next){
	request(
		{
			url: "http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v0001/",
		},(error,response,body)=>{
			if(error || (response.statusCode != 200)){
				next(new Error(error));
				return;
			}
			var check = JSON.parse(body);
				res.json(body);
		}
	);
});

app.get("/apiKey", function(req,res,next){
	request(
		{
			url: "http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v0001/",
			qs: {
				key: req.query.key
			}
		},(error,response,body)=>{
			if(error || (response.statusCode != 200)){
				next(new Error(error));
				return;
			}
			var check = JSON.parse(body);
				res.json(body);
		}
	);
});

var server = app.listen(8000, function(){
	console.log("started listening on http://%s:%s", server.address().address, server.address().port) 
}) ;