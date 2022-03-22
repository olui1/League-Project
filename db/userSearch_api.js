const axios = require('axios');

let userSearchApi = {};

// Get EncryptedSummonerID and EncryptedAccountID
userSearchApi.all = (region, summonerName) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
    headers: {
     "X-Riot-Token": process.env.LOL_API_KEY,
    }                        
}) .then(res => {
    return resolve(res.data); 
}) .catch(err => reject(err))
    })
}

module.exports = userSearchApi;