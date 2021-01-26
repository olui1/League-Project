const express = require("express");
const router = express.Router();
const leaderboardApi = require('../db/leaderboard_api');

router.get('/', async (req, res, next) => {
    try {
        let results = await leaderboardApi.all();
        console.log(req.params)
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;