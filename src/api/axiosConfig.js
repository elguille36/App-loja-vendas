import axios from 'axios';
import { API_BASE_URL, DEFAULT_HEADERS, REQUEST_CONFIG } from '@/constants/config';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: DEFAULT_HEADERS,
  timeout: REQUEST_CONFIG.timeout,
});

// Adicione interceptadores para lidar com erros
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
