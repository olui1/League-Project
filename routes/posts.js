const express = require("express");
const router = express.Router();
const path = require('path');
const db = require(path.join(__dirname,'../db/posts_db'));

// Post a comment
router.post("/", async (req, res, next) => {
    try{
        let results = await db.one(req.body.name, req.body.comment);
        res.status(201).json({
            status: "success",
            data: {
                id: req.body.id,
                name: req.body.name,
                comment: req.body.comment
            }
        })
    }
    catch(e) {
        console.log(e);
    }  
})

// Get all comments
router.get('/', async (req, res, next) => {
    try {
        let results = await db.all(req.body);
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

// Get one comment
router.get('/:id', async (req, res, next) => {
    try {
        let results = await db.rone(req.params.id);
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

// Update a comment
router.put('/:id', async (req, res, next) => {
    try {
        let results = await db.update(req.body.name, req.body.comment, req.params.id);
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

// Delete a comment
router.delete('/:id', async (req, res, next) => {
    try {
        let results = await db.delete(req.params.id);
        res.status(204).json({
            status: "success"
        });
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;