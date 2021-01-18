const express = require("express");
const router = express.Router();
const infoSearchApi = require('../db/infoSearch_api');


// Get League Entries In All Queues
router.get('/:region/:id', async (req, res, next) => {
    try {
        let results = await infoSearchApi.all(req.params.region, req.params.id);
        console.log(req.params)
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;