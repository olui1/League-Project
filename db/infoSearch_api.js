const axios = require('axios');

let infoSearchApi = {};

// Get League Entries In All Queues
infoSearchApi.all = (region, id) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`, {
    headers: {
     "X-Riot-Token": process.env.LOL_API_KEY,
    }                        
}) .then(res => {
    return resolve(res.data); 
}) .catch(err => reject(err))
    })
}

module.exports = infoSearchApi;