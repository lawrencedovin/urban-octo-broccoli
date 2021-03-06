// Can be used for production, development, or test
process.env.NODE_ENV = 'test';
// console option
// NODE_ENV="test"

const request = require('supertest');

const app = require('../app');
let items = require('../fakeDb');

let popsicle = { name: "popsicle", price: 0.99 };

// Places Popsicle in items array before each test
beforeEach(function() {
    items.push(popsicle);
});

// Empties out the contents in cats array after each test
afterEach(function() {
    // make sure this *mutates*, not redefines, 'cats'
    items.length = 0;
});

describe("GET /items", function() {
    test("Get all items", async function() {
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);

        expect(res.body).toEqual({ items: [popsicle] });
    });
});

describe("GET /items/:name", function() {
    test("Gets a single item", async function() {
        const res = await request(app).get(`/items/${popsicle.name}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ item: popsicle });
    });
    test("Responds with 404 for invalid item", async function() {
        const res = await request(app).get(`/items/potato`);
        expect(res.statusCode).toBe(404);
    });
});


describe("POST /items", function() {
    test("Creates a new item", async function() {
        const resp = await request(app)
                            .post('/items')
                            .send({ 
                                name: "potato",
                                price: 1.50 
                            });
        expect(resp.statusCode).toBe(201);

        expect(resp.body)
                .toEqual({ 
                    added: { name: "potato", price: 1.50 } 
                });
    });
    test("Responds with 400 if name is missing", async function() {
        const resp = await request(app).post('/items').send({});
        expect(resp.statusCode).toBe(400);
    });
});

describe("PATCH /items/:name", function() {
    test("Updating a item's name", async function() {
        const res = await request(app)
                            .patch(`/items/${popsicle.name}`)
                            .send({ name: "Will Smith", price: 1.50 });
        expect(res.statusCode).toBe(200);
        expect(res.body)
            .toEqual({
                updated: { name: "Will Smith", price: 1.50 }
            });
    });
    test("Responds with 404 for invalid name", async function() {
        const res = await request(app)
                            .patch(`/items/potato`)
                            .send({ name: "Will Smith", price: 1.50 });
        expect(res.statusCode).toBe(404);
    });
});

describe("DELETE /items/:name", function() {
    test("Deleting an item", async function() {
        const res = await request(app).delete(`/items/${popsicle.name}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: `Deleted` });
    });
    test("Responds with 404 for invalid item", async function() {
        const res = await request(app).delete(`/items/hamface`);
        expect(res.statusCode).toBe(404);
    });
});