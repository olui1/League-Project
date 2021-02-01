const express = require("express");
const router = express.Router();
const path = require('path');
const db = require(path.join(__dirname, '../db/champions_db'));

// Get all champions
router.get('/', async (req, res, next) => {
    try {
        let results = await db.all();
        res.json(results);
        console.log(results);
    }
    catch(e) {
        console.log(e);
    }
});

// Get one champion
router.get('/:champion', async (req, res, next) => {
    try {
        let results = await db.one(req.params.champion);
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;