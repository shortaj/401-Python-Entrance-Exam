'use strict';

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/Public'));
app.get(express.static('/Resources/Images/1493167447_facebook_square.png'))


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
