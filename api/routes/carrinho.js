import express from 'express';
import { listarCarrinho, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho, getCartCount, atualizarQuantidade } from '../controllers/carrinhocontroller.js';

const router = express.Router();

router.get('/carrinho', listarCarrinho);
router.post('/carrinho', adicionarAoCarrinho);
router.delete('/carrinho/:id', removerDoCarrinho);
router.patch('/carrinho/:id', atualizarQuantidade);
router.delete('/carrinho', limparCarrinho);
router.get('/carrinho/count', getCartCount);

export default router;