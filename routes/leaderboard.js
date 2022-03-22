const express = require("express");
const router = express.Router();
const path = require('path');
const leaderboardApi = require(path.join(__dirname,'../db/leaderboard_api'));

router.get('/', async (req, res, next) => {
    try {
        let results = await leaderboardApi.all();
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;