import api from '@/api/axiosConfig';
import { ENDPOINTS } from '@/constants/config';

export const getCartItems = async (signal) => {
  return api.get(ENDPOINTS.CART, { signal });
};

export const getCartCount = async () => {
  const { count } = await api.get(`${ENDPOINTS.CART}/count`);
  return count || 0;
};

export const addToCart = async (productId, quantity = 1) => {
  return api.post(ENDPOINTS.CART, {
    produtoId: productId,
    quantidade: quantity
  });
};

export const updateCartItem = async (id, quantity) => {
  return api.patch(`${ENDPOINTS.CART}/${id}`, {
    quantidade: quantity
  });
};

export const removeCartItem = async (id) => {
  return api.delete(`${ENDPOINTS.CART}/${id}`);
};