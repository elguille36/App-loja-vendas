import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import chalk from 'chalk';

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 100],
    },
  },
  categoria: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 100],
    },
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
      min: 0,
    },
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
}, {
  tableName: 'produto',
  indexes: [
    {
      fields: ['nome']
    }
  ]
});

console.log(chalk.bgRedBright`Models Produtos Funcionando`)

export default Produto;