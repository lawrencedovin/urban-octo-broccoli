// connect to right DB --- set before loading db.js
process.env.NODE_ENV = "test";
// npm packages
const request = require("supertest");
// app imports
const app = require("../app");
const db = require("../db");

let testUser;
beforeEach(async () => {
    const result = await db.query(
        `INSERT INTO users (name, type) 
         VALUES ('Davie504', 'admin')
         RETURNING id, name, type`); 
    testUser = result.rows[0];
});

afterEach(async () => {
    await db.query(`DELETE FROM users`);
});

afterAll(async () => {
    await db.end();
});

// describe("HOPE THIS WORKS", () => {
//     test("BLAH", () => {
//         console.log(testUser);
//         expect(1).toBe(1);
//     });
// });

describe("GET /users", () => {
    test("Get a list of users", async () => {
        const res = await request(app).get('/users')
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({users: [testUser]});
    });
});

describe("GET /users/:id", () => {
    test("Gets a single user", async() => {
        const res = await request(app).get(`/users/${testUser.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({user: testUser});
    });
    test("Responds with 404 for invalid id", async() => {
        const res = await request(app).get(`/users/0`);
        expect(res.statusCode).toBe(404);
    });
});

describe("POST /users", () => {
    test("Creates a single user", async () => {
        const res = await request(app).post('/users').send({name: 'Pizza', type: 'staff'});
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
            user: {
                   id: expect.any(Number),
                   name: 'Pizza',
                   type: 'staff'
                  }
        });
    });
});

describe("PATCH /users/:id", () => {
    test("Updates a single user", async () => {
        const res = await request(app).patch(`/users/${testUser.id}`).send({name: 'PBJ', type: 'admin'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            user: {
                   id: testUser.id,
                   name: 'PBJ',
                   type: 'admin'
                  }
        });
    });
    
    test("Responds with 404 for invalid id", async() => {
        const res = await request(app).patch(`/users/0`).send({name: 'PBJ', type: 'admin'});
        expect(res.statusCode).toBe(404);
    });
});

describe("DELETE /users/:id", () => {
    test("Deletes a single user", async () => {
        const res = await request(app).delete(`/users/${testUser.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({message: 'Deleted'});
    });

    // test("Responds with 404 for invalid id", async() => {
    //     const res = await request(app).delete(`/users/0`);
    //     expect(res.statusCode).toBe(404);
    // });
});