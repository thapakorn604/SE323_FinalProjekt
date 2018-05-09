const request = require('supertest');
const app = require('../app.js')

describe('Test the lecturer path', () => {
    test(' response the GET method and get lecturer array', (done) => {
        return request(app).get('/lecturer/index').expect(200).then(response =>{
        	expect(response.body).toBeInstanceOf(Array);
        })
    });
    test(' response the GET by id and get lecturer object', (done) => {
        return request(app).get('/lecturer/index/101').expect(200).then(response =>{
        	expect(response.body).toBeInstanceOf(Object);
        })
    });
})