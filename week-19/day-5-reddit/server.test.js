const request = require('supertest');
const { app, pool } = require('./server');

// afterAll(() => {
//     // Clear the database
//     pool.end(); // Close the DB connection
// });

test('GET /posts returns posts', async () => {
    const response = await request(app)
        .get('/posts')
        .expect(200)
        .expect('Content-Type', /json/);

    expect(response.body.posts[0].title).toBe('Hello World!');
});