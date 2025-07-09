import { DataTypes } from 'sequelize';
import sequelize from '../database.js';



const Usuario = sequelize.define('Usuario', {
  nome: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  senha: DataTypes.STRING
});

export default Usuario;