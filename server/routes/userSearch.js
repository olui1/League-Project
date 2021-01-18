const express = require("express");
const router = express.Router();
const userSearchApi = require('../db/userSearch_api');


// Get EncryptedSummonerID and EncryptedAccountID
router.get('/:region/:summonerName', async (req, res, next) => {
    try {
        let results = await userSearchApi.all(req.params.region, req.params.summonerName);
        res.json(results);
    }
    catch(e) {
        console.log(e);
    }
});


module.exports = router;