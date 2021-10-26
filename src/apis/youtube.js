import axios from 'axios';

const KEY = 'AIzaSyDwCdEqeErYYj0J1D4c30_8VQaHMUwETik';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});