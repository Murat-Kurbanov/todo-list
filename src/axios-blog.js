import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todolist-a70d4.firebaseio.com/'
});

export default instance;
