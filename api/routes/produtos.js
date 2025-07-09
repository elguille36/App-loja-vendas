import express from 'express';
import chalk from 'chalk'
import { listarProdutos, criar, atualizar, excluir } from '../controllers/produtocontroller.js'

const router = express.Router();

router.get('/produto', listarProdutos);
router.get('/produto/search', listarProdutos);
router.post('/produto', criar);
router.put('/produto/:id', atualizar);
router.delete('/produto/:id', excluir);

export default router;

console.log(chalk.bgBlue`Rotas Produtos Funcionando`)