import Produto from '../models/produto.js';
import { Op } from 'sequelize';

import chalk from 'chalk'

export const listarProdutos = async (req, res) => {
  try {
    const { categoria, nome } = req.query;
    const whereClause = {};

    if (categoria && categoria.trim() !== '') {
      whereClause.categoria = categoria;
    }

    if (nome && nome.trim() !== '') {
      whereClause.nome = {
        [Op.like]: `%${nome.toLowerCase()}%`
      };
    }

    const produtos = await Produto.findAll({
      where: whereClause,
      limit: 30
    });

    res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ erro: 'Erro ao buscar produtos.' });
  }
};

export async function criar(req, res) {
  const novoProduto = await Produto.create(req.body);
  res.json(novoProduto);
}

export async function atualizar(req, res) {
  const { id } = req.params;
  const produto = await Produto.findByPk(id);
  if (produto) {
    await produto.update(req.body);
    res.json(produto);
  } else {
    res.status(404).json({ erro: 'Produto não encontrado' });
  }
}

export async function excluir(req, res) {
  const { id } = req.params;
  const produto = await Produto.findByPk(id);
  if (produto) {
    await produto.destroy();
    res.json({ mensagem: 'Produto excluído' });
  } else {
    res.status(404).json({ erro: 'Produto não encontrado' });
  }
}

console.log(chalk.bgYellowBright`Controlador Produto Funcionando`)