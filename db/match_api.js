const axios = require('axios');

let matchApi = {};

// Get One Match
matchApi.all = (platformId, matchId) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://${platformId}.api.riotgames.com/lol/match/v4/matches/${matchId}`, {
    headers: {
     "X-Riot-Token": process.env.LOL_API_KEY,
    }                        
}) .then(res => {
    return resolve(res.data); 
}) .catch(err => reject(err))
    })
}



module.exports = matchApi;