const express = require("express");
const router = express.Router();
const path = require('path');
const db = require(path.join(__dirname,'../db/abilities_db'));

// Get all skills
router.get('/:champion', async (req, res, next) => {
    try {
        let results = await db.all(req.params.champion);
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

// Get one particular skill
router.get('/:champion/:skill', async (req, res, next) => {
    try {
        let results = await db.one(req.params.champion, req.params.skill);
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;