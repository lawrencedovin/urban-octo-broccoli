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

describe("HOPE THIS WORKS", () => {
    test("BLAH", () => {
        console.log(testUser);
        expect(1).toBe(1);
    });
});