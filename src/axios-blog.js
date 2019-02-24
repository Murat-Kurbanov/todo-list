import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://labwork-js3.firebaseio.com/'
});

export default instance;