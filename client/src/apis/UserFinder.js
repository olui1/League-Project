import axios from 'axios';

export default axios.create({
    baseURL: "http://league-hub.herokuapp.com/api/userSearch",
});