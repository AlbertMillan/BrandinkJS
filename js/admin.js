import { authElements } from './views/base'

const axios = require('axios');

const API_URL = 'http://localhost:3000/api'

const instance = axios.create({
    validateStatus: ((status) => status === 200)
});

// Login
authElements.submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // 1. Check if there are both username and password
    if ( authElements.username.value !== '' && authElements.password.value !== '')
    {
        const url = `${API_URL}/login?username=${authElements.username.value}&password=${authElements.username.value}`;

        instance.get(url)
         .then((result) => {
            console.log('Successful Login!');
         }).catch((err) => {
            console.log('Error found!');
         });
    }

    console.log('Hello Admin Page!');
});