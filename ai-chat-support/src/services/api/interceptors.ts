import axiosInstance from './axiosInstance';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token to request headers if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    } else if (error.response?.status === 403) {
      // Handle forbidden access
      console.error('Forbidden: Access denied');
    } else if (error.response?.status === 404) {
      // Handle not found
      console.error('Resource not found');
    } else if (error.response?.status === 500) {
      // Handle server errors
      console.error('Server error occurred');
    } else if (error.response?.status === 422) {
      // Handle validation errors
      console.error('Validation error occurred');
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;