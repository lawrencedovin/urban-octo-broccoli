// Can be used for production, development, or test
process.env.NODE_ENV = 'test';
// console option
// NODE_ENV="test"

const request = require('supertest');

const app = require('../app');
let cats = require('../fakeDb');

let pickles = { name: "Choco" };

// Places Choco in cats array before each test
beforeEach(function() {
    cats.push(pickles);
});

// Empties out the contents in cats array after each test
afterEach(function() {
    // make sure this *mutates*, not redefines, 'cats'
    cats.length = 0;
});

describe("GET /cats", function() {
    test("Get all cats", async function() {
        const res = await request(app).get('/cats');
        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual({cats: [pickles]});
    });
});