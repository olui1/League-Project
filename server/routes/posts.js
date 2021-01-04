const express = require("express");
const router = express.Router();
const db = require('../db/posts_db');

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
        console.log(req.body);
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
        console.log(results);
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
        console.log(results);
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