const express = require('express');
const path = require('path');

const app = express();
const students = require('./database/students')
const lecturers = require('./database/lecturers')
const admins = require('./database/admins')
const courses = require('./database/courses')

// Server static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

/*************************Student part ***********************/

//get all students
app.get('/student/index',(req,res) => {
	res.status(200).json(students)
});

//get student by id
app.get('/student/index/:id', (req, res) => {
  res.json(students.find(student => student.studentId == req.params.id))
});

/*************************Lecturer part ***********************/

//get all lecturers
app.get('/lecturer/index',(req,res) => {
    res.json(lecturers)
});

//get lecturer by id
app.get('/lecturer/index/:id', (req, res) => {
  res.json(lecturers.find(lecturer => lecturer.lecturerId == req.params.id))
});

/*************************Lecturer part ***********************/


/*************************Admin part ***********************/

//get all admins
app.get('/admin/index',(req,res) => {
    res.json(admins)
});

//get student by id
app.get('/admin/index/:id', (req, res) => {
  res.json(admins.find(admin => admin.adminId == req.params.id))
});

/*************************Course part ***********************/

//get all courses
app.get('/student/enroll',(req,res) => {
    res.json(courses)
});

//get course by id
app.get('/student/enroll/:id', (req, res) => {
  res.json(courses.find(course => course.courseId == req.params.id))
});


/*************************Course part ***********************/

module.exports = app;