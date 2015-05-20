var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/views/index.html'));
})

var server = app.listen(3000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})