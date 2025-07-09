import express from 'express';
import { cadastrarUsuario, loginUsuario } from '../controllers/usuariocontroller.js';
import chalk from 'chalk';


const router = express.Router();

router.post('/cadastrar', cadastrarUsuario);
router.post('/login', loginUsuario);

// router.get('/limpar', LimpandoUsuarios);// rota de apagar usuarios salvos,limpando o banco

export default router;

console.log(chalk.bgBlue`Rotas usuarios funciona`)