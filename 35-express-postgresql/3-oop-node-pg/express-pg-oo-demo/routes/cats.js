/** Cat routes for express-pg-oo */

const express = require("express");
const db = require("../db");

const Cat = require("../models/cat");

const router = new express.Router();

// IMPORTANT: all of these function bodies should really be
// wrapped in a try/catch, where catching an error calls
// next(err) --- this is omitted here for brevity in slides
/** (fixed) get all cats: [{id, name, age}] */

router.get("/", async function (req, res, next) {
  try {
    let cats = await Cat.getAll();
    return res.json(cats);
  }
  catch(e) {
    return next(e);
  }
});

/** get cat by id: {id, name, age} */

router.get("/:id", async function (req, res, next) {
  try {
    let cat = await Cat.getById(req.params.id);
    return res.json(cat);
  }
  catch(e) {
    return next(e);
  }
});

/** create cat from {name, age}: return {name, age} */

router.post("/", async function (req, res, next) {
  let cat = await Cat.create(req.body.name, req.body.age);
  return res.json(cat);
});

/** delete cat from {id}; returns "deleted" */

router.delete("/:id", async function (req, res, next) {
  await Cat.remove(req.params.id);
  return res.json("deleted");
});

/** age cat: returns new age */

router.post("/:id/age", async function (req, res, next) {
  let newAge = await Cat.makeOlder(req.params.id);
  return res.json(newAge);
});


module.exports = router;