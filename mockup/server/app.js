const express = require('express');
const path = require('path');

const app = express();
const db = require('./db')

// Server static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/student/index', (req, res) => {
  res.json(db)
})

module.exports = app;