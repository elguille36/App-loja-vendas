import sequelize from './database.js';
import Produto from './models/produto.js';
import Carrinho from './models/carrinho.js'
import chalk from 'chalk';

await sequelize.sync({ force: true }); //estava em true
await Carrinho.sync();

await Produto.bulkCreate([
  // Alimentos
  { nome: 'Harina Pan', categoria: 'alimentos', preco: 18.90, imagem: '/img/harina-pan.png' },
  { nome: 'Atum', categoria: 'alimentos', preco: 9.50, imagem: '/img/atum.png' },
  { nome: 'Harina Cachapas', categoria: 'alimentos', preco: 15.90, imagem: '/img/cachapas.png' },
  { nome: 'Cerelac', categoria: 'alimentos', preco: 21.90, imagem: '/img/cerelac.png' },
  { nome: 'Diablitos', categoria: 'alimentos', preco: 7.90, imagem: '/img/diablitos.png' },
  { nome: 'Flips', categoria: 'alimentos', preco: 18.90, imagem: '/img/flips.png' },
  { nome: 'Pirulin', categoria: 'alimentos', preco: 13.90, imagem: '/img/pirulin.png' },
  { nome: 'Rikesa', categoria: 'alimentos', preco: 8.90, imagem: '/img/rikesa.png' },

  // Higiene
  { nome: 'Desodorante Secret', categoria: 'higiene', preco: 14.99, imagem: '/img/desodorante secret.png' },
  { nome: 'Desodorante Men', categoria: 'higiene', preco: 15.99, imagem: '/img/desodorante.png' },
  { nome: 'Papel Higienico', categoria: 'higiene', preco: 13.99, imagem: '/img/papel-higienico.png' },
  { nome: 'Pasta dental', categoria: 'higiene', preco: 5.99, imagem: '/img/pasta de dente.png' },
  { nome: 'Sabão em Pó', categoria: 'higiene', preco: 18.99, imagem: '/img/sabão-em-pó.png' },
  { nome: 'Sabão Liquido', categoria: 'higiene', preco: 12.99, imagem: '/img/sabaõ liquido.png' },
  { nome: 'Desodorante Barra', categoria: 'higiene', preco: 16.99, imagem: '/img/dove.png' },
  { nome: 'Desinfectante', categoria: 'higiene', preco: 9.90, imagem: '/img/desifectante.png' },

  // Lar
  { nome: 'Desinfectante', categoria: 'lar', preco: 9.90, imagem: '/img/desifectante.png' },
  { nome: 'Cloro Lavansan', categoria: 'lar', preco: 15.90, imagem: '/img/limpieza.png' },
  { nome: 'Sacolas  Lixo', categoria: 'lar', preco: 10.90, imagem: '/img/bolsas.png' },
  { nome: 'Vassoura', categoria: 'lar', preco: 8.90, imagem: '/img/cepillo.png' },
  { nome: 'Luvas', categoria: 'lar', preco: 7.90, imagem: '/img/guantes.png' },
  { nome: 'Balde', categoria: 'lar', preco: 6.90, imagem: '/img/valde.png' },
  { nome: 'Chapa', categoria: 'lar', preco: 70.90, imagem: '/img/budare.png' },
  { nome: 'Pano de chão', categoria: 'lar', preco: 19.90, imagem: '/img/lampasos.png' },
]);

console.log(chalk.bgBlue`Produtos criado com sucesso`);
process.exit();