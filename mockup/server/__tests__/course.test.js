const request = require('supertest');
const app = require('../app')

describe('Test the course path', () => {
    test(' response the GET method and get course array', (done) => {
        return request(app).get('/student/enroll').expect(200).then(response =>{
        	expect(response.body).toBeInstanceOf(Array);
        })
    });
    test(' response the GET by id and get course object', (done) => {
        return request(app).get('/student/enroll/953323').expect(200).then(response =>{
        	expect(response.body).toBeInstanceOf(Object);
        })
    });
})