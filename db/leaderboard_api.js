const axios = require('axios');

let leaderboardApi = {};

leaderboardApi.all = () => {
    return new Promise((resolve, reject) => {
        axios.get(`https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`, {
    headers: {
     "X-Riot-Token": process.env.LOL_API_KEY,
    }                        
}) .then(res => {
    return resolve(res.data); 
}) .catch(err => reject(err))
    })
}



module.exports = leaderboardApi;