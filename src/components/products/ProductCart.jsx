import { useState, useMemo } from 'react';
import AddToCartButton from './AddToCartButton';
import ProductImageFallback from '../ui/ImageFallback';
import { BASE_URL } from '../../constants/config';

const CardProduto = ({ produto }) => {
  const [imageError, setImageError] = useState(false);
  // const imageUrl = produto.imagem ? `${BASE_URL}${produto.imagem}` : null;
  const imageUrl = useMemo(() => (
    produto.imagem ? `${BASE_URL}${produto.imagem}` : null
  ), [produto.imagem]);

  return (
    <li className='product'>
      <div className='product-image-container'>
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={produto.nome}
            className='product-image'
            onError={() => setImageError(true)}
            onLoad={() => setImageError(false)} //Removemos o erro se a imagem for carregada.
          />
        ) : (
          <ProductImageFallback aspectRatio="5/4" />
        )}
      </div>
      <div className='product-details'>
        <div>
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco.toFixed(2).replace('.', ',')} <small>/un</small></p>
        </div>
        <AddToCartButton produto={produto} />
      </div>
    </li>
  );
};

export default CardProduto;