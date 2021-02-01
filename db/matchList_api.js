const axios = require('axios');

let matchListApi = {};

// Get Entire MatchList
matchListApi.all = (region, accountId) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=15`, {
    headers: {
     "X-Riot-Token": process.env.LOL_API_KEY,
    }                        
}) .then(res => {
    return resolve(res.data); 
}) .catch(err => reject(err))
    })
}



module.exports = matchListApi;