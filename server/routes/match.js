const express = require("express");
const router = express.Router();
const matchApi = require('../db/match_api');


// Get one match
router.get('/:platformId/:matchId', async (req, res, next) => {
    try {
        let results = await matchApi.all(req.params.platformId, req.params.matchId);
        console.log(req.params)
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;