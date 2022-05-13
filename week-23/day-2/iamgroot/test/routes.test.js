'use strict';

//const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('GET /groot/ without message returns error 400', async () => {
  const response = await request(app)
      .get('/groot')
      .expect(400)
      .expect('Content-Type', /json/);

  expect(response.body.error).toBe('I am Groot');
});

test('GET /groot/ with message returns expected response ', async () => {
  const response = await request(app)
      .get('/groot?message=something')
      .expect(200)
      .expect('Content-Type', /json/);

  expect(response.body.recieved).toBe("something");
  expect(response.body.translated).toBe("I am Groot");
});