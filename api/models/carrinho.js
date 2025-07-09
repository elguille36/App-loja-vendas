import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Produto from './produto.js';

const Carrinho = sequelize.define('Carrinho', {
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produto,
      key: 'id'
    },
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  }
}, {
  tableName: 'carrinho',
  timestamps: false
});

Carrinho.belongsTo(Produto, { foreignKey: 'produtoId' });

export default Carrinho;