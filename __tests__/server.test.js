'use strict';

const { app } = require('../lib/server.js');
const { sequelize } = require('../model/index.js');
const base64 = require('base-64');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing Auth features from server', () => {

  it('POST to /signup to create a new user', async () => {
    let response = await request.post('/signup').send({
      username: 'Test',
      password: 'Tester',
    });

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Test');
    expect(response.body.password).toBeTruthy();
    expect(response.body.password).not.toEqual('Tester');
  })

  it('POST to /signin to login as a user (use basic auth)', async () => {
    // let response = await  request.post('/signin').send();
    
    // expect(response.status).toEqual(200);
    // expect(response.body.username).toEqual('Test');
    // expect(response.body.password).toBeTruthy();
  })
  
  it('Does the middleware function (send it a basic header)', async () => {

  })


})