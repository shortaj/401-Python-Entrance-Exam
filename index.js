'use strict';

const express = require('express');
const app = express();

const server = app.listen(3000, function() {
  console.log('listening on port 3000');
