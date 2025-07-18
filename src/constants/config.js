const IS_PRODUCTION = import.meta.env.PROD;

// URL base do aplicativo front-end
export const BASE_URL = IS_PRODUCTION
  ? 'https://some-production-site.com'
  : 'http://localhost:5173';

// URL base do aplicativo back-end
export const API_BASE_URL = IS_PRODUCTION
  ? 'https://app-loja-vendas.onrender.com/api'
  : 'http://localhost:3001/api';

// Endpoints da API
export const ENDPOINTS = {
  PRODUCTS: '/produto',
  CART: '/carrinho'
};

// Cabeçalhos padrão para a API
export const DEFAULT_HEADERS = Object.freeze({
  'Content-Type': 'application/json',
});

// Configurações de consulta da API
export const REQUEST_CONFIG = Object.freeze({
  timeout: 10000, // 10 segundos
  retries: IS_PRODUCTION ? 3 : 1, // 3 tentativas em produção, 1 em desenvolvimento
});