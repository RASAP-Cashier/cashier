import axios from 'axios';
import { getToken, removeToken } from './auth';

const BASE_API_URL = '';

export const apiService = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
});

apiService.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiService.interceptors.response.use(
  response => {
    console.log(response, 'REsponse');
    if (response.status !== 200) {
      //error
      return Promise.reject(response.data.message);
    } else {
      return response;
    }
  },
  error => {
    console.log('Debug', error.response.data.statusCode);
    if (error.response.data.statusCode === 401) {
      removeToken();
      window.location.href = '/login';
    }
    return Promise.reject('error');
  },
);
