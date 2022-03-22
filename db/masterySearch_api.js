const axios = require('axios');

let masterySearchApi = {};

// Get EncryptedSummonerID and EncryptedAccountID
masterySearchApi.all = (region, id) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`, {
    headers: {
     "X-Riot-Token": process.env.LOL_API_KEY,
    }                        
}) .then(res => {
    return resolve(res.data); 
}) .catch(err => reject(err))
    })
}

module.exports = masterySearchApi;