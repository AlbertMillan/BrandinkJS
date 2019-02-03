import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
// 'https://infinite-spire-26504.herokuapp.com/api'
axios.defaults.validateSatus = ((status) => status === 200);

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const routes = {
    newUser: '/user',
    adminLogin: '/user/login',
    adminLogout: '/user/token',  
};