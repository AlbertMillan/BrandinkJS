require('./config/config');

import { routes } from './config/config';
import { authElements } from './views/base'
import * as accountView from './views/accountView';

import axios from 'axios';

let token;

// Login
authElements.submitBtn.addEventListener('click', (e) => {
    // 1. Check if there are both username and password
    if ( authElements.username.value !== '' && authElements.password.value !== '')
    {
        e.preventDefault();     // Inside so that the form handles automatically

        const postData = {
            username: authElements.username.value,
            password: authElements.password.value
        };

        axios.post(routes.adminLogin, postData).then((response) => {
            token = response.headers['x-auth'];
            accountView.clearFields();
         }).catch((err) => {
            console.log(err);
            console.log('Error found!');
         });
    }
});

// Logout ...
authElements.logoutBtn.addEventListener('click', (e) => {
    axios.delete(routes.adminLogout, {
        headers: {
            'x-auth': token
        }
    }).then((response) => {

        console.log('Logout successfully!');
    }).catch((err) => {
        console.log(err);
    });
});