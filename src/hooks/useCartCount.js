import { useEffect, useState } from 'react';
import { getCartCount } from '../api/cartApi';

export const useCartCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setCount(await getCartCount());
      } catch (error) {
        console.error('Erro ao buscar contagem:', error);
      }
    };

    fetchCount();
    window.addEventListener('cartGlobalUpdate', fetchCount);
    return () => window.removeEventListener('cartGlobalUpdate', fetchCount);
  }, []);

  return count;
};