import * as mailView from './views/mailView';
import { elements } from './views/base'

const mailchecker = require('mailchecker');


const API_URL = 'http://localhost:3000'

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
            // const res = await query(url);

            fetch(url).then(res => res.json()).then(result => {
                // 2. Check if email was actually delivered successfully.
                // TODO: Need to correct this.
                result.message === 'Success' ? mailView.setSuccessMessage() : mailView.setErrorMessage('Error al enviar email!');
            });
        }
        else {
            mailView.setErrorMessage('Email invalido!');
        }
    }
    else
    {
        // 1. Set background color to red!
        mailView.setErrorMessage('Rellene los campos Nombre y Email!y');
    }

    // 2. Display response message
    mailView.toggleEmailResponse();
    setTimeout(() => {
        mailView.toggleEmailResponse();
    }, 2000);
    
});


// const query = (url) => {
//     let res;
//     fetch(url)
//     .then(res => res.json())
//     .then(result => {
//         return result;
//     });
// };