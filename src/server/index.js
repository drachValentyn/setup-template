const express = require('express');
const bodyParser = require('body-parser');
const task = require('./routes/task');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('./task', task);

app.get('/', (req, res) => {
  res.send('Hi');
});

module.exports = app;
