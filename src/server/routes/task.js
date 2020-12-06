const express = require('express');

const task = express.Router();

task.post('/log', (req, res) => {
  console.log(1);
  res.json({ success: true });
});

task.post('/items', (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

module.exports = task;
