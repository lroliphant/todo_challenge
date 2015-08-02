var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);

app.use(express.static(process.cwd() + '/assets'));
app.use(express.static(__dirname + '/views'));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/app', express.static(path.join(__dirname, 'app')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// app.get('/', function(req, res){
//   res.sendFile('index.html');
// });

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
