const assert = require('assert');
const request = require('supertest');
const app = require('../app'); // Adjust the path if needed

describe('GET /', () => {
    it('should return "Hello, sqoin!"', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                assert.strictEqual(res.text, 'Hello, sqoin!');
                done();
            });
    });
});

