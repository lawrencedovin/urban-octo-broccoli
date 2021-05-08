// Can be used for production, development, or test
process.env.NODE_ENV = 'test';
// console option
// NODE_ENV="test"

const request = require('supertest');
const { post } = require('../app');

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

        expect(res.body).toEqual({ cats: [pickles] });
    });
});

describe("POST /cats", function() {
    test("Creates a new cat", async function() {
        const resp = await request(app)
            .post('/cats')
            .send({ name: "Ezra" });
        expect(resp.statusCode).toBe(201);

        expect(resp.body).toEqual({ cat: { name: "Ezra" } });
    });
});
