import * as mailView from './views/mailView';
import { elements } from './views/base'

const mailchecker = require('mailchecker');
const axios = require('axios');
const fs = require('fs');


// const API_URL = 'http://localhost:3000/api'
const API_URL =  'https://infinite-spire-26504.herokuapp.com/api'

const instance = axios.create({
    validateStatus: ((status) => status === 200)
});


elements.formBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    // Check if fields are filled
    if (elements.formName.value !== '' && elements.formEmail.value !== '')
    {  
        // check email format
        if (mailchecker.isValid(elements.formEmail.value) )
        {
            // 1. Send Pass parameters to send email and retrieve response
            const url = `${API_URL}/submitForm?name=${elements.formName.value}&email=${elements.formEmail.value}&text=${elements.formMessage.value}`;

            instance.get(url)
                .then((result) => {
                    result.data.message === 'Success' ? mailView.setSuccessMessage() : mailView.setErrorMessage('Error al enviar email!');
                    mailView.cleanFields();
                })
                .catch ((error) => {
                    const now = new Date().toString();
                    mailView.setErrorMessage('Servidor en mantenimiento!')
                    fs.appendFile('client.log', `${now}: ${error}`, (err) => {
                        if (err) console.log(err);
                    });
                    console.log(error);
                });
        }
        else {
            mailView.setErrorMessage('Email invalido!');
        }
    }
    else
    {
        // Set background color to red!
        mailView.setErrorMessage('Rellene los campos Nombre y Email!');
    }

    // 2. Display response message
    mailView.toggleEmailResponse();
    setTimeout(() => {
        mailView.toggleEmailResponse();
    }, 2000);
    
});

/**
 * TODO
 *  [✔] Use axiom library to fetch requests to db
 *  [ ] Investigate how to get store data from the request (for 
 *      some reason you aren't able to do so).
 *  [ ] Center error message when sending email.
 *  [ ] Show images code dinamically at the start instead of having shit tons of lines
 */