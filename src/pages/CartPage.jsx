import { useState, useEffect } from 'react';
import { getCartItems, updateCartItem, removeCartItem } from '../api/cartApi';
import { triggerCartUpdate } from '../utils/cartEvents';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { usePageMetadata } from '../hooks/usePageMetadata';

const CartPage = () => {
  usePageMetadata({
    title: "Carrinho | Loja online Tudo Aqui",
    description: "Carrinho de compras na loja Tudo Aqui"
  });

  const [cartItems, setCartItems] = useState([]);

  const loadCartData = async () => {
    try {
      const data = await getCartItems();
      setCartItems(data);
    } catch (error) {
      console.error('Erro ao buscar itens do carrinho:', error);
    }
  };

  useEffect(() => {
    loadCartData();
  }, []);

  const handleQuantityChange = async (id, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await updateCartItem(id, newQuantity);
      triggerCartUpdate();
      loadCartData();
    } catch (error) {
      console.error('Erro ao atualizar quantidade:', error);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      await removeCartItem(id);
      triggerCartUpdate();
      loadCartData();
    } catch (error) {
      console.error('Erro ao remover item:', error);
    }
  };

  return (
    <section>
      <h1>Carrinho de compras</h1>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Seu carrinho está vazio!</p>
        ) : (
          <>
            <ul className="cart-items-list" role="list">
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onDecrease={() => handleQuantityChange(item.id, item.quantidade - 1)}
                  onIncrease={() => handleQuantityChange(item.id, item.quantidade + 1)}
                  onRemove={() => handleRemoveItem(item.id)}
                  isDecreaseDisabled={item.quantidade <= 1}
                />
              ))}
            </ul>
            <CartSummary items={cartItems} />
          </>
        )}</div>
    </section>
  );
};

export default CartPage;