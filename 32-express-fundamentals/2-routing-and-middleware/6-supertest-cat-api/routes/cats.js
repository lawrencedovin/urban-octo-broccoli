const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressErrors');
const cats = require('../fakeDb');

router.get('/', (req, res) => {
    res.json({ cats });
});

router.post('/', (req, res) => {
    const newCat = { name: req.body.name };
    cats.push(newCat);
    res.status(201).json({ cat:newCat });
});

router.get("/:name", (req, res) => {
    const foundCat = cats.find(cat => cat.name === req.params.name);
    if(foundCat === undefined) {
        throw new ExpressError("Cat not found", 404);
    }
    res.json({ cat: foundCat });
});

router.patch("/:name", (req, res)) {
    const foundCat = cats.find(cat => cat.name === req.params.name);
    if(foundCat === undefined) {
        
    }
}