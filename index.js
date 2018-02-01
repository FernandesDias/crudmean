var http = require('http');
var express = require('express');
var path = require('path');
var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://localhost/meanDb', {useMongoClient: true});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//setar pasta estatica
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', appRoutes);

http.createServer(app).listen(port);

console.log('Backend runing on port:', port);