import { elements } from './base';

export const toggleEmailResponse = () => {
    elements.emailResponse.classList.toggle('show');
};

export const setErrorMessage = (text) => {
    elements.emailResponse.style.backgroundColor = 'red';
    elements.emailResponse.textContent = text;
};

export const setSuccessMessage = () => {
    elements.emailResponse.style.backgroundColor = 'green';
    elements.emailResponse.textContent = 'Email enviado correctamente!';
};