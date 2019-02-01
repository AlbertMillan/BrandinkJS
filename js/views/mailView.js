import { mainElements } from './base';

export const toggleEmailResponse = () => {
    mainElements.emailResponse.classList.toggle('show');
};

export const setErrorMessage = (text) => {
    mainElements.emailResponse.style.backgroundColor = 'red';
    mainElements.emailResponse.textContent = text;
};

export const setSuccessMessage = () => {
    mainElements.emailResponse.style.backgroundColor = 'green';
    mainElements.emailResponse.textContent = 'Email enviado correctamente!';
};

export const cleanFields = () => {
    mainElements.formName.value = '';
    mainElements.formEmail.value = '';
    mainElements.formMessage.value = '';
};