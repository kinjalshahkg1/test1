var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain'); // set content-type
  res.send('i am a beautiful butterfly text--Thanks!!!!!!!'); // send text response
});

app.listen(process.env.PORT || 4730);