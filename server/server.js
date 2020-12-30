require("dotenv").config();
const express = require("express")
const abilties = require('./routes/abilities');
const posts = require('./routes/posts');





// Retrieve API_Key from .env
const apiKey = process.env.LOL_API_KEY;

// Init server
const app = express();

// express middleware
app.use(express.json());

// Use Routes
app.use('/api/abilities', abilties);

// Create Port
const port = process.env.PORT || 5000;

// Listen in onto the Port
app.listen(port, () => console.log(`Server started on port ${port}`));

