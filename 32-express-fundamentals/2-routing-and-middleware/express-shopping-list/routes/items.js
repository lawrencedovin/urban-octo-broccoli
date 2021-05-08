const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressErrors');
const items = require('../fakeDb');

router.get('/', (req, res) => {
    res.json({ items });
});

router.get("/:name", (req, res) => {
    const foundItem = items.find(item => item.name === req.params.name);
    if(foundItem === undefined) {
        throw new ExpressError("Item not found", 404);
    }
    res.json({ item: foundItem });
});

router.post('/', (req, res, next) => {
    try {
        if(!req.body.name) throw new ExpressError("Name is required", 400);
        if(!req.body.price) throw new ExpressError("Price is required", 400);
        const newItem = { name: req.body.name, price: req.body.price };
        items.push(newItem);
        return res.status(201).json({ added: newItem });
    }
    catch(error) {
        return next(error);
    }
});

router.patch("/:name", (req, res) => {
    const foundItem = items.find(item => item.name === req.params.name);
    if (foundItem === undefined) {
        throw new ExpressError("Item not found", 404);
    }
    foundItem.name = req.body.name;
    foundItem.price = req.body.price;
    res.json({ updated: foundItem });
});

router.delete("/:name", (req, res) => {
    const foundItem = items.findIndex(item => item.name === req.params.name);
    if (foundItem === -1) {
        throw new ExpressError("Item not found", 404);
    }
    items.splice(foundItem, 1);
    res.json({ message: `Deleted` });
});

module.exports = router;