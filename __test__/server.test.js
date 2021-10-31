'use strict';


const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('my  testing unit',() => {
  test('is there a Home route :✈️', async() => {
    const response  = await request.get('/')
    expect(response.status).toEqual(200)
  })
  test('is there a 404  hadling  :😕', async() => {
    const response  = await request.get('/invaildURL')
    expect(response.status).toEqual(404)
  })

})