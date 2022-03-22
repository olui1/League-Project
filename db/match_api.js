const axios = require('axios');

let matchApi = {};

// Get One Match
matchApi.all = (platformId, matchId) => {
    var continent;
    
    return new Promise((resolve, reject) => {
        if(platformId === 'na1')
        continent = 'americas';
        else if(platformId === 'euw1')
            continent = 'europe';
        else{
            continent = 'asia';
        }
        axios.get(`https://${continent}.api.riotgames.com/lol/match/v5/matches/${matchId}`, {
    headers: {
     "X-Riot-Token": process.env.LOL_API_KEY,
    }                        
}) .then(res => {
    return resolve(res.data); 
}) .catch(err => reject(err))
    })
}

module.exports = matchApi;