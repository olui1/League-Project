const express = require("express");
const router = express.Router();
const db = require('../db/champions_db');

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

module.exports = router;