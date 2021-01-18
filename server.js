const express = require('express');
const history = require('connect-history-api-fallback');
const connect = require('connect');

const port = process.env.PORT || 8080;

connect()
  .use(history())
  .use(express.static('dist'))
  .listen(port);
