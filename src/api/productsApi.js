import api from '@/api/axiosConfig';
import { ENDPOINTS } from '@/constants/config';

export const getProducts = async ({ category, name }) => {
  return api.get(`${ENDPOINTS.PRODUCTS}/search`, {
    params: {
      ...(category && { categoria: category }),  // Adicione um parâmetro se a categoria existir
      ...(name && { nome: name })               // Adicione um parâmetro se o nome existir
    }
  });
};