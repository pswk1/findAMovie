
import axios from "axios";
const searchURL = 'http://www.omdbapi.com/?s=';
const titleURL = 'http://www.omdbapi.com/?t='
// Enter API key here
const KEY = '&apikey=';

const API =  {
    search: function (query) {
        return axios.get(searchURL + query + KEY);
    },
    getDetails: function(query) {
        return axios.get(titleURL + query + KEY);
    }
}

export default API;