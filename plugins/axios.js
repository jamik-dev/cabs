import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'https://e-shop.ndc.uz/api',
  });

  axiosInstance.interceptors.request.use((config) => {
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  axiosInstance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    return Promise.reject(error);
  });
  nuxtApp.provide('axios', axiosInstance);
});