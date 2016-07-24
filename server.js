var express = require('express');
var app = express();                       			        // create our app w/ express
var mongoose = require('mongoose');             	       // mongoose for mongodb
var morgan = require('morgan');         				  // log requests to the console (express4)
var bodyParser = require('body-parser');				 // pull information from HTML POST (express4)
var port = process.env.PORT || 8080;

// import express from "express";
// const app = express();                       			        // create our app w/ express
// import mongoose from "mongoose";             	       // mongoose for mongodb
// import morgan from "morgan";         				  // log requests to the console (express4)
// import bodyParser from "body-parser";				 // pull information from HTML POST (express4)
// import path from "path";


// var db = require('./config/db');
// mongoose.connect(db.url);

app.use(express.static(__dirname + '/app')); 

app.use(morgan('dev'));                                         	// log every request to the console
// app.use(bodyParser.urlencoded({'extended' : 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
// app.use(bodyParser.json({ type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
// app.use(methodOverride());

app.get('/', (req, res) => {
    res.render('app/index.html');
});


app.listen(port,process.env.IP);
console.log('Server running on port: ' + port);