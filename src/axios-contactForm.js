import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://danohhomepage.firebaseio.com/'
});


export default instance;