import { addToCart } from '../../api/cartApi';
import toast from 'react-hot-toast';
import { triggerCartUpdate } from '../../utils/cartEvents';
import { truncateText } from '../../utils/stringUtils';
import IconButton from '../ui/IconButton';

const AddToCartButton = ({ produto }) => {
  const handleAddToCart = async () => {
    try {
      await addToCart(produto.id);
      toast.success(`${truncateText(produto.nome)} adicionado ao carrinho`);
      triggerCartUpdate();
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      toast.error('Erro ao adicionar ao carrinho');
    }
  };

  return (
    <IconButton
      iconName="add_shopping_cart"
      ariaLabel="Adicionar ao carrinho"
      onClick={handleAddToCart}
      className="icon-button large"
    />
  );
};

export default AddToCartButton;