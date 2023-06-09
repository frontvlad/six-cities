import axios from 'axios';

const BACKEND_URL = 'https://6.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
    const api = axios.create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT,
        withCredentials: true,
    });

    return api;
};
