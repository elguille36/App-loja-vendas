import Button from '../ui/Button';

const CartSummary = ({ items }) => {
  const total = items.reduce(
    (sum, item) => sum + (item.Produto.preco * item.quantidade),
    0
  );

  return (
    <div className="cart-summary">
      <h2>Resumo do Pedido</h2>
      <div className="total-price-item">
        <span>Total:</span>
        <span aria-live="polite">R$ {total.toFixed(2)}</span>
      </div>
      <Button className="button buy-button full-width">Finalizar Compra</Button>
    </div>
  );
};

export default CartSummary;