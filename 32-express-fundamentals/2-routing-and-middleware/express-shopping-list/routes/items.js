const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressErrors');
const items = require('../fakeDb');

router.get('/', (req, res) => {
    res.json({ items });
});

router.post('/', (req, res, next) => {
    try {
        if(!req.body.name) throw new ExpressError("Name is required", 400);
        if(!req.body.price) throw new ExpressError("Price is required", 400);
        const newItem = { name: req.body.name, price: req.body.price };
        items.push(newItem);
        return res.status(201).json({ added:newItem });
    }
    catch(error) {
        return next(error);
    }
});

router.get("/:name", (req, res) => {
    const foundItem = items.find(item => item.name === req.params.name);
    if(foundItem === undefined) {
        throw new ExpressError("Item not found", 404);
    }
    res.json({ item: foundItem });
});

// router.patch("/:name", (req, res) => {
//     const foundCat = items.find(cat => cat.name === req.params.name);
//     if (foundCat === undefined) {
//         throw new ExpressError("Cat not found", 404);
//     }
//     foundCat.name = req.body.name;
//     res.json({ cat: foundCat });
// });

// router.delete("/:name", (req, res) => {
//     const foundCat = items.findIndex(cat => cat.name === req.params.name);
//     if (foundCat === -1) {
//         throw new ExpressError("Cat not found", 404);
//     }
//     items.splice(foundCat, 1);
//     res.json({ message: `Deleted successfully!` });
// });

module.exports = router;