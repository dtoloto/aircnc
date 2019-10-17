import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.1.172:5000'
    baseURL: 'http://localhost:5000'
})

export default api;