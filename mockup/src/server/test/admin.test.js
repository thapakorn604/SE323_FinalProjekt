const request = require('supertest');
const app = require('../app')

describe('Test the admin path', () => {
    test(' response the GET method and get admin array', (done) => {
        return request(app).get('/admin/index').expect(200).then(response =>{
        	expect(response.body).toBeInstanceOf(Array);
        })
    });
    test(' response the GET by id and get admin object', (done) => {
        return request(app).get('/admin/index/9').expect(200).then(response =>{
        	expect(response.body).toBeInstanceOf(Object);
        })
    });
})