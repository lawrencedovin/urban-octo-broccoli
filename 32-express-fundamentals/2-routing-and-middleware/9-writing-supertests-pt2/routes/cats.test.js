// Can be used for production, development, or test
process.env.NODE_ENV = 'test';
// console option
// NODE_ENV="test"

const request = require('supertest');
const { post } = require('../app');

const app = require('../app');
let cats = require('../fakeDb');

let choco = { name: "Choco" };

// Places Choco in cats array before each test
beforeEach(function() {
    cats.push(choco);
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

        expect(res.body).toEqual({ cats: [choco] });
    });
});

describe("GET /cats/:name", function() {
    test("Gets a single cat", async function() {
        const res = await request(app).get(`/cats/${choco.name}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ cat: choco });
    });
    test("Responds with 404 for invalid cat", async function() {
        const res = await request(app).get(`/cats/icecube`);
        expect(res.statusCode).toBe(404);
    });
});


describe("POST /cats", function() {
    test("Creates a new cat", async function() {
        const resp = await request(app).post('/cats').send({ name: "Ezra" });
        expect(resp.statusCode).toBe(201);

        expect(resp.body).toEqual({ cat: { name: "Ezra" } });
    });
    test("Responds with 400 if name is missing", async function() {
        const resp = await request(app).post('/cats').send({});
        expect(resp.statusCode).toBe(400);
    });
});

describe("PATCH /cats/:name", function() {
    test("Updating a cat's name", async function() {
        const res = await request(app).patch(`/cats/${choco.name}`).send({ name: "Will Smith"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({cat: {name: "Will Smith"}});
    });
    test("Responds with 404 for invalid name", async function() {
        const res = await request(app).patch(`/cats/Potato`).send({ name: "Will Smith"});
        expect(res.statusCode).toBe(404);
    });
});

describe("DELETE /cats/:name", function() {
    test("Deleting a cat", async function() {
        const res = await request(app).delete(`/cats/${choco.name}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: `Deleted successfully!` });
    });
    test("Responds with 404 for invalid cat", async function() {
        const res = await request(app).delete(`/cats/hamface`);
        expect(res.statusCode).toBe(404);
    });
});