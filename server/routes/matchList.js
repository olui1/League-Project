const express = require("express");
const router = express.Router();
const matchListApi = require('../db/matchList_api');


// Get matchlist
router.get('/:region/:accountId', async (req, res, next) => {
    try {
        let results = await matchListApi.all(req.params.region, req.params.accountId);
        console.log(req.params)
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});

module.exports = router;