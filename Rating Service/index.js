var http=require('http');
var socket=require('socket.io');
var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/my_db', {
    
    useNewUrlParser: true ,
    useUnifiedTopology: true 
})
.then((result)=>console.log('connection establisted with db'))
.catch((err)=>console.log(err));

var server=http.createServer(app);
var io=socket(server);


app.use(express.json());

var rating=require('./routes/api/rating');
app.use('/',rating);


var port=8080;

server.listen(port,'0.0.0.0',console.log(`Server running at port ${port}`));

/* var nsp = io.of('communication');
nsp.on('connection', (socket) => {
    console.log('socket connection made and socket id  : ', socket.id);
   // setInterval(callback(socket),5000);
   // callback(socket)
});*/
