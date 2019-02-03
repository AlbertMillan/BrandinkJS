import { authElements } from './base'

export const clearFields = () => {
    authElements.username.value = '';
    authElements.password.value = '';
};