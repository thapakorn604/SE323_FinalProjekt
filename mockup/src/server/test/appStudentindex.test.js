const request = require('supertest');
const app = require('../app')

describe('Test the student path', () => {
    test(' response the GET method and get student array', (done) => {
        return request(app).get('/student/index').expect(200).then(response =>{
        	expect(response.body).toBeInstanceOf(Array);
        })
    });
    test(' response the GET by id and get student object', (done) => {
        return request(app).get('/student/index/582115015').expect(200).then(response =>{
        	expect(response.body).toBeInstanceOf(Object);
        })
    });
})