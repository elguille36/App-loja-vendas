import { useState } from 'react';
import IconButton from '../ui/IconButton';
import Button from '../ui/Button';
import ProductImageFallback from '../ui/ImageFallback';
import { BASE_URL } from '../../constants/config';

const CartItem = ({ item, onDecrease, onIncrease, onRemove, isDecreaseDisabled }) => {
  const [imageError, setImageError] = useState(false);
  const imageUrl = item.Produto.imagem ? `${BASE_URL}${item.Produto.imagem}` : null;

  return (
    <li className="cart-item">
      {imageUrl && !imageError ? (
        <img
          src={imageUrl}
          alt={item.Produto.nome}
          className="cart-item-image"
          onError={() => setImageError(true)}
          onLoad={() => setImageError(false)}
        />
      ) : (
        <ProductImageFallback aspectRatio="1/1" />
      )}
      <div className="cart-item-details">
        <p className="cart-item-name">{item.Produto.nome}</p>
        <p className="cart-item-price">R$ {item.Produto.preco.toFixed(2).replace('.', ',')}</p>
        <div className="quantity-controls">
          <IconButton
            iconName="remove"
            ariaLabel="Diminuir quantidade"
            onClick={onDecrease}
            disabled={isDecreaseDisabled}
            className="icon-button small"
          />
          <span aria-live="polite">{item.quantidade}</span>
          <IconButton
            iconName="add"
            ariaLabel="Aumentar quantidade"
            onClick={onIncrease}
            className="icon-button small"
          />
        </div>
        <Button
          className="button remove-button"
          onClick={onRemove}
        >
          Remover
        </Button>
      </div>
    </li>
  );
};

export default CartItem;