import { Link } from 'react-router-dom';
import { useCartCount } from '../../hooks/useCartCount';

const CartHeader = () => {
  const cartCount = useCartCount();

  return (
    <Link to="/carrinho" className="cart-header" aria-label="Carrinho de compras">
      <span className="material-symbols-outlined" translate="no" aria-hidden="true">
        shopping_cart
      </span>
      {cartCount > 0 && (
        <span className="cart-header-counter" aria-live="polite">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartHeader;