import axios from 'axios';

export default axios.create({
    baseURL: "https://league-hub.herokuapp.com/api/masterySearch",
});