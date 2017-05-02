var express = require('express');
var app = express();

app.use(express.static(__dirname + '/Public'));
var port = process.env.PORT || 3000;
app.listen(port);
