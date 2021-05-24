/** Routes for users of pg-relationships-demo. */

const db = require("../db");
const express = require("express");
const ExpressError = require("../expressError");
const router = express.Router();


/** Get users: [user, user, user] */

router.get("/", async function (req, res, next) {
  try {
    const results = await db.query(
          `SELECT id, name, type FROM users`);

    return res.json(results.rows);
  }

  catch (err) {
    return next(err);
  }
});

/** Get user: {name, type, messages: [{msg, msg}]} */

router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const userRes = await db.query(
          `SELECT name, type FROM users WHERE id=$1`,
        [id]);

    const messagesRes = await db.query(
          `SELECT id, msg FROM messages 
             WHERE user_id = $1`,
        [id]);

    if(userRes.rows.length === 0) {
      throw new ExpressError(`User not found with id:${id}`, 404);
    }
    const user = userRes.rows[0];
    user.messages = messagesRes.rows;
    return res.json(user);
  }

  catch (err) {
    return next(err);
  }
});

// Get user: {this.name, type, messages: [{msg, msg}]}

module.exports = router;