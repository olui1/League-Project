require("dotenv").config();
const express = require("express");
const cors = require("cors");
const abilties = require('./routes/abilities');
const posts = require('./routes/posts');
const champions = require('./routes/champions');
const userSearch = require('./routes/userSearch');
const infoSearch = require('./routes/infoSearch');
const masterySearch = require('./routes/masterySearch');
const axios = require('axios');


// Retrieve API_Key from .env
const apiKey = process.env.LOL_API_KEY;

// Init server
const app = express();

// cors middleware - connects the server and client domain
app.use(cors());

// express middleware
app.use(express.json());

// Use Routes
app.use('/api/posts', posts);
app.use('/api/abilities', abilties);
app.use('/api/champions', champions);
app.use('/api/usersearch', userSearch);
app.use('/api/infosearch', infoSearch);
app.use('/api/masterysearch', masterySearch)
// Create Port
const port = process.env.PORT || 5000;

// Listen in onto the Port
app.listen(port, () => console.log(`Server started on port ${port}`));
// app.listen((port) => {
//     axios.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Lewis%20Hamilton', {
//         headers: {
//         //  "Access-Control-Allow-Origin": "*",
//          "X-Riot-Token": "RGAPI-73e702ef-0248-4dcf-ad97-a14644d555af",
//          // "Origin": "https://developer.riotgames.com"
//         }                        
//     })
//     .then(res => {console.log(res.data) })
//     .catch(err => console.log(err))
// })
