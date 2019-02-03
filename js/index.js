require('./config/config');

import * as mailView from './views/mailView';
import { mainElements } from './views/base';

import axios from 'axios';
import mailchecker from 'mailchecker';


mainElements.formBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    // Check if fields are filled
    if (mainElements.formName.value !== '' && mainElements.formEmail.value !== '')
    {  
        // check email format
        if (mailchecker.isValid(mainElements.formEmail.value) )
        {
            // 1. Send Pass parameters to send email and retrieve response
            // const url = `${API_URL}/submitForm?name=${mainElements.formName.value}&email=${mainElements.formEmail.value}&text=${mainElements.formMessage.value}`;

            axios.get(url)
                .then((result) => {
                    result.data.message === 'Success' ? mailView.setSuccessMessage() : mailView.setErrorMessage('Error al enviar email!');
                    mailView.cleanFields();
                })
                .catch ((error) => {
                    const now = new Date().toString();
                    mailView.setErrorMessage('Servidor en mantenimiento!');
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