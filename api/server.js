import express from 'express';
import cors from 'cors';
import sequelize from './database.js';
import produtoRoutes from './routes/produtos.js';
import carrinhoRoutes from './routes/carrinho.js';
import usuarioRoutes from './routes/usuario.js';
import chalk from 'chalk';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', produtoRoutes);
app.use('/api', carrinhoRoutes);
app.use('/usuarios',usuarioRoutes )


sequelize.sync().then(() => {
  app.listen(3001, () => console.log(chalk.bgGreen`APi sincronizado com banco de dados na porta 3001`));
});
