const express = require('express');
const history = require('connect-history-api-fallback');
const connect = require('connect');

const port = process.env.PORT || 8080;

const app = connect()
  .use(history())
  .use(express.static('dist'))
  .listen(port);

// const app = express();

// app.use(express.static('dist'));

// const port = process.env.PORT || 8080;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });
