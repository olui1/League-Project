const axios = require('axios');

let matchListApi = {};

// Get Entire MatchList
matchListApi.all = (region, puuid) => {
    var continent;

    return new Promise((resolve, reject) => {
        if(region === 'na1')
        continent = 'americas';
        else if(region === 'euw1')
            continent = 'europe';
        else{
            continent = 'asia';
        }
        axios.get(`https://${continent}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=15`, {
    headers: {
     "X-Riot-Token": process.env.LOL_API_KEY,
    }                        
}) .then(res => {
    return resolve(res.data); 
}) .catch(err => reject(err))
    })
}

module.exports = matchListApi;