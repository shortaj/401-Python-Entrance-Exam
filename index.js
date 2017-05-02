'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/Public'));
app.get(express.static('/Resources/Images/1493167447_facebook_square.png'))


const server = app.listen(3000, function() {
  console.log('listening on port 3000')
});
