const express = require("express");
const router = express.Router();
const db = require('../db/abilities_db');

// Get all skills
router.get('/:champion', async (req, res, next) => {
    try {
        let results = await db.all(req.params.champion);
        res.json(results);
        console.log(results);
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
        console.log(results)
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;