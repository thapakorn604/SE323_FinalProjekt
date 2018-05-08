const express = require('express');
const path = require('path');

const app = express();
const students = require('./database/students')

// Server static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
//get all students

app.get('student/index',(req,res) => {
    res.json(students)
})

//get student by id
app.get('/student/index/:id', (req, res) => {
  res.json(students.find(student => student.studentId == req.params.id))
})

module.exports = app;