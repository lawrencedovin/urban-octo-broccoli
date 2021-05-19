/** Routes for users of pg-intro-demo. */

const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res, next) => {
    try {
        const results = await db.query(`SELECT * FROM users`);
        return res.json(results.rows);
    }
    catch(e) {
        return next(e);
    }
});

// /users/search?type=admin

router.get("/search", async (req, res, next) => {
    try {
        const { type } = req.query;
        const results = await db.query(`SELECT * FROM users WHERE type=$1`, [type]);
        return res.json(results.rows);
    }
    catch(e) {
        return next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { name, type } = req.body;
        const results = await db.query(
            `INSERT INTO users (name, type) 
             VALUES ($1, $2)
             RETURNING id, name, type`, 
             [name, type]);
        return res.status(201).json(results.rows[0]);
    }
    catch(e) {
        return next(e);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, type } = req.body;
        const results = await db.query(
            `UPDATE users SET name=$1, type=$2
            WHERE id = $3
            RETURNING id, name, type`,
            [name, type, id]
        );
        return res.json(results.rows[0]);
    }
    catch(e) {
        return next(e);
    }
});

module.exports = router;